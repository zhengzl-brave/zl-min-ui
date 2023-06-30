import React from 'react';
import './index.less'

const ThemeToggle = () => {
  const themeList = ["#2980b9", "red", "orange", "yellow", 'green', 'blue', 'purple']

  const themeChange = () => {
    let themeToggler = document.querySelector('.theme-toggler')
    themeToggler?.classList.toggle('active')
    if(themeToggler?.classList.contains('active')) {
      document.querySelector('.demo-body')?.classList.add('active')
    } else {
      document.querySelector('.demo-body')?.classList.remove('active')
    }
  }

  const mainColorSelect = (item: string) => {
    document.documentElement.setAttribute('data-theme', item)
  }

  return <>
    <div className='themes-container'>
      <h3>主题颜色 light/dark</h3>
      <div className="theme-toggler" onClick={themeChange}>
        <span>light</span>
        <span className='toggler'></span>
        <span>dart</span>
      </div>

      <h3>选择品牌色</h3>
      <div className="theme-colors">
        {
          themeList.map((item, index) => (
            <div key={index} className="color" style={{background: item}} onClick={mainColorSelect.bind(null, item)}></div>
          ))
        }
      </div>
    </div>
  </>
}

export default ThemeToggle
