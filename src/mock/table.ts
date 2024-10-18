// mock.js文件
import Mock from 'mockjs'
// Mock.Random是一个工具类，用于生成各种随机数据
const Random = Mock.Random

interface DateList {
    date: string
    name: string
    address: string
}

// 模拟数据
const dataList: DateList[] = []
for(let i = 0; i < 100; i++) {
    const template = {
        id: i + 1,
        date: Random.date(), // 生成一个随机日期，可加参数生成定义的格式的日期。
        name: Random.name(), // 随机生成名字
        address: Random.province(),  // 随机生成地址
    }

    dataList.push(template)
}

// list分页接口
Mock.mock('/api/list', 'post', (params: any) => {
    let info = JSON.parse(params.body)
    let [ index, size, total ] = [info.current, info.pageSize, dataList.length]
    let newDataList = dataList.slice((index - 1) * size, (index) * size)
    return {
        code: 200,
        message: '请求成功',
        data: {
            current: index,
            pageSize: size,
            rows: newDataList,
            total: total
        }
    }
})