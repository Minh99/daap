#!/bin/sh

prefix=/var/www/html/dapp-auction/contracts/solana/program/target/rls/debug/build/jemalloc-sys-f254c05fd2143925/out
exec_prefix=/var/www/html/dapp-auction/contracts/solana/program/target/rls/debug/build/jemalloc-sys-f254c05fd2143925/out
libdir=${exec_prefix}/lib

LD_PRELOAD=${libdir}/libjemalloc.so.2
export LD_PRELOAD
exec "$@"
