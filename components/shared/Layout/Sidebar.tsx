import React from 'react';
import styled from 'styled-components';
import {Col, Space, Menu, Dropdown, Progress} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import Markdown from 'components/shared/CustomMarkdown';
import Image from 'next/image';
import image1 from 'public/room1.png';

import {FOOTER_HEIGHT, GRID_LAYOUT, HEADER_HEIGHT} from 'lib/constants';
import {MarkdownForChainIdT} from 'types';
import {
  useGlobalState,
  getTitleForCurrentStepId,
  getStepsForCurrentChain,
  getPositionForCurrentStepId,
  getCurrentStepIdForCurrentChain,
} from 'context';

const Sidebar = ({markdown}: {markdown: MarkdownForChainIdT}) => {
  const {state} = useGlobalState();
  const currentStepId = getCurrentStepIdForCurrentChain(state);
  const stepTitle = getTitleForCurrentStepId(state);
  const steps = Object.values(getStepsForCurrentChain(state)).map((step) => {
    const index = step.position as number;
    const title = step.title as string;
    return {index, title};
  });

  const md = markdown[currentStepId];
  const stepIndex = getPositionForCurrentStepId(state);

  const menu = (
    <StyledMenu>
      {steps.map(({index, title}) => {
        return <MenuItem key={index}>{`${index} - ${title}`}</MenuItem>;
      })}
    </StyledMenu>
  );

  return (
    <Left span={GRID_LAYOUT[0]} key={currentStepId}>
      <Img>
        <Image src={image1} alt="" height={300} width={500} />
      </Img>
      <StepHeader size="large" align="center">
        <StepTitle>Sonic</StepTitle>
        {/* <Progress
          type="circle"
          percent={(stepIndex / steps.length) * 100}
          format={() => `${stepIndex}/${steps.length}`}
          width={50}
          trailColor={'white'}
        /> */}
      </StepHeader>
      <p>
        Content hay dịch ra là nội dung mang những thông điệp được người viết
        truyền tải đến cho mọi người. Mục đích mà content có thể là cung cấp các
        thông tin kiến thức hữu ích, sử dụng để PR, quảng cáo dịch vụ/sản phẩm,
        review,… được trình bày nhiều ngữ cảnh khác nhau và có gài thêm các yếu
        tố cảm xúc kích thích sự tham gia tương tác của người đọc với nội dung.
        Hình thức tiếp cận của content cũng rất đa dạng có thể qua các bài viết
        trên blog/báo/social, qua các hình ảnh/video, hoặc là hình thức tiếp cận
        truyền thống bằng các tờ rơi giới thiệu chương trình khuyến mãi,… Đó là
        tóm gọn về định nghĩa về content mà bạn cần biết, nhưng chỉ định nghĩa
        thôi là sẽ không đủ nếu muốn trở thành một content writer chuyên nghiệp.
      </p>
    </Left>
  );
};
//<Markdown captureMessage={() => {}}>{md}</Markdown>
const heightOffset = `${FOOTER_HEIGHT + HEADER_HEIGHT}px`;

const Left = styled(Col)`
  text-algin: center;
  position: relative;
  padding: 40px;
  background: #f5f5f5;
  border-right: solid 2px black;
  overflow: scroll;
  height: calc(100vh - ${heightOffset});
`;

const StepHeader = styled(Space)`
  margin-bottom: 20px;
`;

const StepTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

const StyledMenu = styled(Menu)`
  padding: 10px 0;
`;

const MenuItem = styled.div`
  padding: 4px 12px;
`;

const Img = styled.div`
  width: 100%;
  text-align: center;
`;

export default Sidebar;
