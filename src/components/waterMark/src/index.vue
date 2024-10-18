<template>
    <div>
        <el-button type="primary" @click="download">
            <slot>下载水印图片</slot>
        </el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let canvas: any = ref(null)
let cans: any = ref(null)

const download = () => {
    new Promise((resolve) => {
      resolve({
        "code": 200,
        "msg": "ok",
        "time": 1720094767921,
        "data": {
            "contractInfoVO": {
                "pageIndex": 0,
                "pageSize": 0,
                "orderByCol": "",
                "isDesc": false,
                "sortList": [],
                "id": 5092,
                "title": "【IT运维商】联想百应服务商合作框架协议",
                "status": 2,
                "docNum": "BYP062407040001",
                "contractStartTime": "2024-07-04",
                "contractStartTimeString": "2024-07-04",
                "contractEndTime": "2025-07-04",
                "contractEndTimeString": "2025-07-04",
                "userId": 381522007,
                "remark": "",
                "adminId": -1,
                "docType": "pdf",
                "docPath": "联想百应服务商合作框架协议(IT运维商)",
                "docPathDesc": "联想百应服务商合作框架协议(IT运维商)",
                "signatures": "[c3207ab7-f274-480f-a4a4-d6d4ccb448a1, 26f5c42a-3cd2-42af-8aaf-73156df1fa56, a8a71245-cf53-4095-809e-be561d773d62, 2379110b-ba04-4ae6-8f3b-bad5d2629c8e]",
                "pages": 37,
                "contractId": "bae00f1a-4722-4dcb-a618-664bd46173df",
                "contractUpdateTime": "",
                "contractUrl": "",
                "contractType": 8,
                "conUserId": "",
                "parentId": 0,
                "sort": 0,
                "isValid": 1,
                "relationId": "",
                "sellerUserId": -1,
                "relationType": -1,
                "defaultSortFields": [],
                "sortFieldMap": {},
                "sortEntity": {}
            },
            "addressVO": {
                "provinceId": 120000,
                "provinceName": "",
                "cityId": 659009503,
                "cityName": "",
                "districtId": 120104,
                "districtName": "",
                "streetId": 120104001,
                "streetName": "",
                "address": "北京市西城区大栅栏街道大栅栏购物中心大栅栏第一百货商场",
                "longitude": "117.17987",
                "latitude": "39.135028"
            },
            "stationBasicVO": {
                "stationCode": "",
                "stationName": "wyl第一个服务站",
                "stationHeaderImg": "https://smbfiletest.baiying.com.cn/merchant/file/20240703142853.jpg",
                "stationType": 2,
                "stationRole": 1,
                "netCode": "22900131000",
                "serviceNetworkCode": "",
                "smartStoreCode": "",
                "responsibleSales": "",
                "responsibleSaleCity": "",
                "isMain": 1,
                "parentStationId": 17781,
                "parentStationName": "",
                "postCode": "",
                "emergencyPhone": "",
                "servicePhone": "13611112222",
                "wechatPhone": "",
                "newStationCode": "22900131",
                "serviceHome": "",
                "isChuli": -1,
                "authTag": 0,
                "weight": 0,
                "remark": "",
                "audit": 1,
                "isFirst": -1,
                "storeStandardName": "",
                "isSunshine": 0,
                "address": "",
                "syncFlag": 0,
                "stationMainBusiness": 0,
                "dispatchPriority": 0,
                "tagStatus": 0,
                "tagRemark": "",
                "runningCondition": 1
            },
            "companyVO": {
                "companyId": 25390,
                "companyName": "阳信鼎讯商贸有限公司阳信鼎讯商贸有限公司阳信商贸有限公司",
                "companySize": "50人以内",
                "businessScope": "许可项目：建设工程施工；测绘服务；酒类经营；特种设备安装改造修理。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：办公设备销售；软件开发；安防设备销售；家用电器销售；五金产品批发；家具销售；计算机软硬件及辅助设备批发；文化、办公用设备制造；办公设备耗材销售；建筑材料销售；水泥制品销售；特种设备销售；机械设备租赁；住房租赁；光伏发电设备租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
                "companyLocationCode": "110000,110100,110101",
                "companyLocationName": "北京市,北京市,东城区",
                "companyAddress": "山东省滨州市阳信县阳城四路南侧、幸福一路西侧第6幢A号房",
                "companyBankAccount": "",
                "bankBranchName": "",
                "country": 0,
                "registeredCapital": "20000000",
                "organizationCode": "49442469-7",
                "companyContactTel": "",
                "companyDetail": "",
                "companyLinkName": "",
                "companyEmail": "3232@qq.com",
                "industryCode": 173,
                "industryGeneralCode": "O812"
            }
        }
    })
    }).then(ret => {
        canvas = document.createElement("canvas")
    document.body.append(canvas)
    canvas.width = 2550
    canvas.height = 3574
    // 获取2D上下文
    cans = canvas.getContext("2d")
    cans!.font = '900 60px Microsoft JhengHei'
    const backgroundImage = new Image()
    backgroundImage.crossOrigin = "Anonymous"
    backgroundImage.src = "https://smbfile.itplace.com.cn/license/ecard.png"
    document.body.append(backgroundImage)
    backgroundImage.onload = () => {
        const { provinceName, cityName,districtName, address  } = ret.data.addressVO
        let data = {
            companyName: ret.data.companyVO.companyName,
            startYear: ret.data.contractInfoVO.contractStartTimeString.split("-")[0],
            startMonth: ret.data.contractInfoVO.contractStartTimeString.split('-')[1],
            startDay: ret.data.contractInfoVO.contractStartTimeString.split('-')[2],
            endYear: ret.data.contractInfoVO.contractEndTimeString.split("-")[0],
            endMonth: ret.data.contractInfoVO.contractEndTimeString.split('-')[1],
            endDay: ret.data.contractInfoVO.contractEndTimeString.split('-')[2],
            netCode: ret.data.stationBasicVO.netCode,
            address: `${ provinceName }${ cityName }${ districtName }${ address }`,
        }

        cans!.drawImage(backgroundImage, 0, 0, 2550, 3574);
        // 公司名称设置：
        // cans!.fillText(data.companyName, 800, 975);
        // 将公司名称切割为14个字符为一组
        let companyNameArr = data.companyName.split('')
        let companyNameArrLength = companyNameArr.length
        let companyNameArrGroup = []
        for (let i = 0; i < companyNameArrLength; i += 14) {
            companyNameArrGroup.push(companyNameArr.slice(i, i + 14).join(''));
        }

        companyNameArrGroup.forEach((item, index) => {
            cans!.fillText(item, 800, 1045 - (companyNameArrGroup.length - index - 1) * 60)
        })


        // cans!.fillText(data.companyName, 800, 1045);
        // 合作期间开始日期
        cans!.fillText(data.startYear, 900, 1580);
        cans!.fillText(data.startMonth, 1170, 1580);
        cans!.fillText(data.startDay, 1330, 1580);
        // 合作期间结束日期
        cans!.fillText(data.endYear, 1590, 1580);
        cans!.fillText(data.endMonth, 1862, 1580);
        cans!.fillText(data.endDay, 2020, 1580);
        // 网点ID
        cans!.fillText(data.netCode, 840, 1765)
        // 服务站地址

        let addressArr = data.address.split('')
        let addressArrLength = addressArr.length
        let addressArrGroup = []
        for (let i = 0; i < addressArrLength; i += 20) {
            addressArrGroup.push(addressArr.slice(i, i + 20).join(''));
        }
        addressArrGroup.forEach((item, index) => {
            cans!.fillText(item, 980, 1933 + index * 65)
        })


        // cans!.fillText(data.address, 980, 1933)
        // const url = canvas.toDataURL('image/png')
        // let el = document.createElement('a')
        // el.href = url
        // el.download = '水印.png'
        // el.click()
    }
    })

}

</script>

<style scoped>

</style>