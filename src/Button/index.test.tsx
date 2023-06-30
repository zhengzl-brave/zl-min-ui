import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  // 测试按钮状态对应展示文本信息
  it('render text by orderType', () => {
    const msg = '未完成'
    const wrap = <Button orderType={3} ></Button>
    render(wrap)
    expect(screen.queryByText(msg)).toBeInTheDocument()
  })

  // 测试disabled时候可否点击按钮
  it('clcik disabled', () => {
    const onclick = jest.fn()
    const wrap = shallow(<Button disabled onClick={onclick}>disable</Button>)
    wrap.simulate('click')
    expect(onclick).not.toBeCalled()
  })
});
