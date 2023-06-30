import React, { ReactNode, useContext } from "react";
import cs from 'classnames'
import './index.less'
import { ConfigContext } from '../ConfigProvider'

interface ButtonProps {
  type?: 'highlight' | 'default';
  text?: string;
  children?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  style?: object;
  orderType?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const button = (props: ButtonProps) => {

  const { type, text, children, disabled, icon, className,style, onClick, orderType } = props;

  const { prefix } = useContext(ConfigContext)

  const btnPre = prefix + '-btn'

  const classes = cs(
    btnPre,
    {
      [`${btnPre}-highlight`]: type === 'highlight',
      [`${btnPre}-disabled`]: disabled
    },
    className
  )

  type orderMapType = Record<number, string>

  const orderMap: orderMapType = {
    1: '已完成',
    2: '已超时',
    3: '未完成'
  }

  return <div style={ style } className={ classes } onClick={(e) => {
    if(disabled) return
    onClick && onClick(e)
  } }>
    { icon }
    { text }
    {/* 注释的是为了单元测试用的 */}
    {/* { orderType && orderMap[orderType] } */}
    { children }
  </div>
}

export default button
