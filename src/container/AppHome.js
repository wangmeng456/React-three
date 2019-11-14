import React, { Component } from 'react'
import { NavBar, Carousel, WingBlank, WhiteSpace, Flex } from 'antd-mobile';

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    >住吧家居</NavBar>

                <WingBlank style={{margin:0}}>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`images/${val}.jpg`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                
                <div className="flex-container">
                    <Flex wrap="wrap">
                        <div style={{width:'30%',height:'110px',marginTop:'10px',marginLeft:'10px',background:'url(images/hotbrands_03.jpg)',color:'#fff',textAlign:'center',lineHeight:'110px'}}>热门品牌</div>
                        <div style={{width:'30%',height:'110px',marginTop:'10px',marginLeft:'8px',background:'url(images/privatecollocation_05.jpg)',color:'#fff',textAlign:'center',lineHeight:'110px'}}>私人搭配师</div>
                        <div style={{width:'30%',height:'110px',marginTop:'10px',marginLeft:'8px',background:'url(images/shoppingguide_07.jpg)',color:'#fff',textAlign:'center',lineHeight:'110px'}}>选购指南</div>
                    </Flex>
                </div>
                <div className="flex-container">
                    <div className="sub-title" style={{marginTop:'10px',marginBottom:'10px',width:'40%',height:'14px',borderLeft:'4px #3fcccb solid',paddingLeft:'6px'}}>热门推荐</div>
                    <Flex wrap="wrap">
                        <div style={{width:'100%',height:'200px',background:'url(images/homefooter_02.jpg)',color:'#fff',textAlign:'center',lineHeight:'360px'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</div>
                    </Flex>
                </div>
            </div>
        )
    }
    
}
