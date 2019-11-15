import React, { Component } from 'react'
import { NavBar, Icon,WingBlank,Carousel, Tabs, Drawer, List,Flex,SearchBar } from 'antd-mobile';

export default class AppShopping extends Component {
    state = {
        data: ['1', '2','3','4'],
        item: ['1','2','3','4','5','6','7','8','9','10'],
        imgHeight: 176,
    }
    componentDidMount() {
    // simulate img loading
        this.setState({
            item: ['1','2','3','4','5','6','7','8','9','10']
        })
        setTimeout(() => {
            this.setState({
                data: ['3', '3','3','3'],
            });
        }, 100);
    }
    render() {
        const font = ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
        return (
            <div style={{position:'relative'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <img src="images/shopping.png" style={{marginRight: '16px'}}/>
                    ]}
                    >商城</NavBar>
                    <div style={{width:'100%',position:'absolute',backgroundColor:'rgba(0, 0, 0, 0.3)',top:'45px',zIndex:999}}>
                        <img src="images/anniu.png" style={{float:'left',marginTop:'10px',marginLeft:'10px'}} />
                        <SearchBar placeholder="输入关键字搜索" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%', float:'left'}} />
                    </div>
                <WingBlank style={{margin:0,position:'relative',zIndex:1}}>
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
                <div className="flex-container" style={{backgroundColor:'#fff'}}>
                    <Flex wrap="wrap" style={{margin:'0'}}>
                        {
                            this.state.item.map(item => (
                                <div style={{fontSize:'11px',backgroundColor: '#fff',width:'13%',height:'60px',marginTop:'20px',marginLeft:'20px',textAlign:'center'}}>
                                    <img src={`images/2${item}.png`} style={{width:'90%',height:'40px'}}/>
                                    {font[`${item}`-1]}
                                </div>
                                )
                            )
                        }
                    </Flex>
                </div>
                <div className="flex-container">
                    <Flex wrap="wrap">
                        <div style={{width:'44%',height:'140px',margin:'14px 10px',fontSize:'14px',color:'#686868'}}>
                            <img src="images/cup_03.jpg" style={{width:'100%',height:'120px',position:'relative'}}/>
                            <span style={{fontSize:'11px',color:'#686868',textAlign:'center'}}>Top Art Studio 欧式风格精细...</span>
                            <br/>
                            <span style={{fontSize:'12px',color:'#000',textAlign:'center'}}>￥39.95</span>
                        </div>
                        <div style={{width:'44%',height:'140px',margin:'14px 10px',fontSize:'14px',color:'#686868'}}>
                            <img src="images/cup2_03.jpg" style={{width:'100%',height:'120px',position:'relative'}}/>
                            <span style={{fontSize:'11px',color:'#686868',textAlign:'center'}}>顺顺工艺欧式风格塑料外框黑...</span>
                            <br/>
                            <span style={{fontSize:'12px',color:'#000',textAlign:'center'}}>￥83.99</span>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}