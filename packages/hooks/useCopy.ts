import { ElMessage } from 'element-plus'
// 复制文本hooks
export const useCopy = (text: string) => {
    // 1、创建input元素
    let input = document.createElement('input')
    // 2、将input的value值赋值为text
    input.value = text
    // 3、将input元素放入body中
    document.body.appendChild(input)
    // 4、选中输入的值
    input.select()
    // 5、执行浏览器复制命令
    document.execCommand('Copy')
    // 6、删除创建的input元素
    document.body.removeChild(input)
    ElMessage.success('复制成功')
}