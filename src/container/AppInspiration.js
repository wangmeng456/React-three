import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Flex, WhiteSpace } from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
export default class AppInspiration extends Component {
    state = {
        data: ['1', '2','3','4','5','6']
    }
    componentDidMount() {
        // simulate img loading
        this.setState({
            data: ['1', '2','3','4','1','2'],
        });
    }
    render() {
        const font = ['橙色律动','儿童房','翻滚吧，地摊君','角落里的遐想'];
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#fff', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                    <Tabs tabs={tabs2}
                initialPage={0}
                tabBarActiveTextColor='#3fcccb'
                tabBarUnderlineStyle={{border:'0px solid #fff'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
                    <div className="flex-container">
                        <Flex wrap="wrap">
                        {this.state.data.map(val => (
                            <div style={{backgroundColor: '#fff',width:'44%',height:'200px',margin:'10px 10px',fontSize:'14px',color:'#686868',position:'relative'}}>
                                <img src={`images/1${val}.jpg`} style={{width:'100%',height:'160px',position:'relative'}}/>
                                <div style={{width:'100%',left:'4%',top:'156px',position:'absolute'}}><img src="images/head.png" style={{width:'30px',height:'30px'}}/>{font[`${val}`-1]}<img src="images/shoucang.png" style={{float:'right',marginTop:'16px',marginRight:'8px'}}/></div>
                            </div>
                        ))}
                        </Flex>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
                    <div className="flex-container">
                        <Flex wrap="wrap">
                        {this.state.data.map(val => (
                            <div style={{backgroundColor: '#fff',width:'44%',height:'200px',margin:'10px 10px',fontSize:'14px',color:'#686868',position:'relative'}}>
                                <img src={`images/1${val}.jpg`} style={{width:'100%',height:'160px',position:'relative'}}/>
                                <div style={{width:'100%',left:'4%',top:'156px',position:'absolute'}}><img src="images/head.png" style={{width:'30px',height:'30px'}}/>{font[`${val}`-1]}<img src="images/shoucang.png" style={{float:'right',marginTop:'16px',marginRight:'8px'}}/></div>
                            </div>
                        ))}
                        </Flex>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
                    <div className="flex-container">
                        <Flex wrap="wrap">
                        {this.state.data.map(val => (
                            <div style={{backgroundColor: '#fff',width:'44%',height:'200px',margin:'10px 10px',fontSize:'14px',color:'#686868',position:'relative'}}>
                                <img src={`images/1${val}.jpg`} style={{width:'100%',height:'160px',position:'relative'}}/>
                                <div style={{width:'100%',left:'4%',top:'156px',position:'absolute'}}><img src="images/head.png" style={{width:'30px',height:'30px'}}/>{font[`${val}`-1]}<img src="images/shoucang.png" style={{float:'right',marginTop:'16px',marginRight:'8px'}}/></div>
                            </div>
                        ))}
                        </Flex>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
                    <div className="flex-container">
                        <Flex wrap="wrap">
                        {this.state.data.map(val => (
                            <div style={{backgroundColor: '#fff',width:'44%',height:'200px',margin:'10px 10px',fontSize:'14px',color:'#686868',position:'relative'}}>
                                <img src={`images/1${val}.jpg`} style={{width:'100%',height:'160px',position:'relative'}}/>
                                <div style={{width:'100%',left:'4%',top:'156px',position:'absolute'}}><img src="images/head.png" style={{width:'30px',height:'30px'}}/>{font[`${val}`-1]}<img src="images/shoucang.png" style={{float:'right',marginTop:'16px',marginRight:'8px'}}/></div>
                            </div>
                        ))}
                        </Flex>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
                    <div className="flex-container">
                        <Flex wrap="wrap">
                        {this.state.data.map(val => (
                            <div style={{backgroundColor: '#fff',width:'44%',height:'200px',margin:'10px 10px',fontSize:'14px',color:'#686868',position:'relative'}}>
                                <img src={`images/1${val}.jpg`} style={{width:'100%',height:'160px',position:'relative'}}/>
                                <div style={{width:'100%',left:'4%',top:'156px',position:'absolute'}}><img src="images/head.png" style={{width:'30px',height:'30px'}}/>{font[`${val}`-1]}<img src="images/shoucang.png" style={{float:'right',marginTop:'16px',marginRight:'8px'}}/></div>
                            </div>
                        ))}
                        </Flex>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
                    <div className="flex-container">
                        <Flex wrap="wrap">
                        {this.state.data.map(val => (
                            <div style={{backgroundColor: '#fff',width:'44%',height:'200px',margin:'10px 10px',fontSize:'14px',color:'#686868',position:'relative'}}>
                                <img src={`images/1${val}.jpg`} style={{width:'100%',height:'160px',position:'relative'}}/>
                                <div style={{width:'100%',left:'4%',top:'156px',position:'absolute'}}><img src="images/head.png" style={{width:'30px',height:'30px'}}/>{font[`${val}`-1]}<img src="images/shoucang.png" style={{float:'right',marginTop:'16px',marginRight:'8px'}}/></div>
                            </div>
                        ))}
                        </Flex>
                    </div>
                </div>
                </Tabs>
                
            </div>
        )
    }
}