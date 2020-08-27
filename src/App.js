import React from 'react';
import { Layout } from 'antd';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined, GithubOutlined } from '@ant-design/icons';
import data from './commands';
import ReactHtmlParser from 'react-html-parser';
import './App.less';

const { Header, Footer, Content } = Layout;




class App extends React.Component {

  state ={
    searchText: '',
    searchedColumn: ''
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        ReactHtmlParser(text)
      ) : (
       ReactHtmlParser(text)
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render(){
    const columns = [
      {
        title: 'Command',
        dataIndex: 'command',
        key: 'command',
        width: '25%',
        ...this.getColumnSearchProps('command'),
      },
      {
        title: 'Usage',
        dataIndex: 'usage',
        key: 'usage',
        width: '75%',
        ...this.getColumnSearchProps('usage'),
      }
    ];

    return(
      <Layout>
          <Header>
            <div style={{color: 'white'}} className="title">
              UNIX TERMINAL COMMAND CHEATSHEET
            </div>
          </Header>
          <Content>
            <div>
              <a className="github-link" href="https://github.com/oluwatobiloba2000/UNIX-terminal-cheatsheet" rel="noopener noreferrer" target = {"_blank"} >
                < GithubOutlined  />
              </a>
            </div>
          <Table  pagination={{ position: ['topCenter', 'bottomCenter'] }} columns={columns} dataSource={data}/>
          </Content>
          <Footer>
            <div style={{textAlign: 'center'}}>&copy; 2020</div>
          </Footer>
        </Layout>
    )
  }
}

  


export default App;