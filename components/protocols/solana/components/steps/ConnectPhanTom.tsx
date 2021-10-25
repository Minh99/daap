import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Space, Typography, Modal} from 'antd';
import {Cluster, clusterApiUrl} from '@solana/web3.js';
import {prettyError} from '@figment-solana/lib';
import {
  getCurrentChainId,
  useGlobalState,
  getCurrentStepIdForCurrentChain,
  getNetworkForCurrentChain,
  getChainInnerState,
} from 'context';
import {PROTOCOL_INNER_STATES_ID} from 'types';
import axios from 'axios';
import {LAMPORTS_PER_SOL} from '@solana/web3.js';
import {trackStorageCleared} from 'utils/tracking-utils';
import {ErrorBox} from '@figment-solana/components/nav';
import type {ErrorT} from '@figment-solana/types';
import {address} from '@maticnetwork/maticjs/dist/ts/types/Common';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const ConnectPhanTom: React.FC = () => {
  const {state, dispatch} = useGlobalState();
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<ErrorT | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const chainId = getCurrentChainId(state);
  const [address, setAddress] = useState<string | null>(null);
  const network = getNetworkForCurrentChain(state);

  useEffect(() => {
    if (error) {
      errorMsg(error);
    }
  }, [error, setError]);

  useEffect(() => {
    if (state) {
      setAddress(
        getChainInnerState(state, chainId, PROTOCOL_INNER_STATES_ID.ADDRESS),
      );
    }
  }, [state, dispatch]);

  function errorMsg(error: ErrorT) {
    Modal.error({
      title: 'Unable to check the balance',
      content: <ErrorBox error={error} />,
      afterClose: () => setError(null),
      width: '800px',
    });
  }

  const getBalance = async () => {
    setFetching(true);
    setError(null);
    try {
      console.log(address);
      const response = await axios.post(`/api/solana/balance`, {
        network,
        address,
      });
      setBalance(response.data / LAMPORTS_PER_SOL);
      dispatch({
        type: 'SetStepIsCompleted',
        chainId: getCurrentChainId(state),
        stepId: getCurrentStepIdForCurrentChain(state),
        value: false,
      });
      console.log(balance);
    } catch (error) {
      setError(prettyError(error));
      setBalance(null);
    } finally {
      setFetching(false);
    }
  };

  const connect = async () => {
    const getProvider = () => {
      if ('solana' in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
          return provider;
        }
      }
      window.open('https://phantom.app/', '_blank');
    };

    try {
      // const resp = await window.solana.connect();
      // setAddress(resp.publicKey.toString());
      const resp = await window.solana.connect();
      console.log(resp.publicKey.toString());
      setFetching(true);

      dispatch({
        type: 'SetStepInnerState',
        chainId: getCurrentChainId(state),
        innerStateId: PROTOCOL_INNER_STATES_ID.ADDRESS,
        value: resp.publicKey.toString(),
      });
      dispatch({
        type: 'SetStepInnerState',
        chainId,
        innerStateId: PROTOCOL_INNER_STATES_ID.SECRET,
        value: null,
      });
      dispatch({
        type: 'SetStepIsCompleted',
        chainId: getCurrentChainId(state),
        stepId: getCurrentStepIdForCurrentChain(state),
        value: false,
      });

      // var msgAxios = '';
      // await axios.post(`/api/solana/balance`, {
      //     network,
      //     address,
      // })
      // .then((response) => {
      //     console.log(response.data);
      //     setBalance(parseInt(response.data) / LAMPORTS_PER_SOL);
      //     console.log(resp.publicKey.toString());
      // })
      // .catch(function (error) {
      //     if (error.response) {
      //         msgAxios = error.response.data
      //     }
      // });
    } catch (error) {
      // setBalance(null);
      setFetching(false);
      //   trackStorageCleared(chainId);
      let mess = error instanceof Error ? error.message : 'Please. Try again1!';
      console.log(mess);
      // { code: 4001, message: 'User rejected the request.' }
    }
  };

  const disconnect = async () => {
    try {
      window.solana.disconnect();
      dispatch({
        type: 'SetStepInnerState',
        chainId: getCurrentChainId(state),
        innerStateId: PROTOCOL_INNER_STATES_ID.ADDRESS,
        value: null,
      });
      dispatch({
        type: 'SetStepIsCompleted',
        chainId: getCurrentChainId(state),
        stepId: getCurrentStepIdForCurrentChain(state),
        value: false,
      });
      console.log('dis');
    } catch (err) {
      // { code: 4001, message: 'User rejected the request.' }
    }
  };

  return (
    <div>
      <Button onClick={connect}> Connect Phantom </Button>
      <Button onClick={disconnect}> Disconnect Phantom </Button>
      <Button onClick={getBalance}> get Phantom </Button>
    </div>
  );
};
export default ConnectPhanTom;
