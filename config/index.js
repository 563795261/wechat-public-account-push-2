export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx26f5ba6022524a9b",
    // 公众号appSecret
    appSecret: "ad920bc089cec919a493df7203f67741",
    // 模板消息id
    templateId: "sscydnuoQwS4kdQmwwDqMr_K6drG-qtmegVGyiEOePY",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o2yzX5on8ZBUKH55CZzZFtj9dpsk","o2yzX5l26BWel7UnVB50xPJlM498"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "陕西",
    // 所在城市
    city: "咸阳",
    // 在一起的日子，格式同上
    loveDate: "2022-04-05",
    // 结婚纪念日
    marryDate: "2022-09-25",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "姐姐", "year": "2023", "date": "01-18", "type": 'new'},
      {"name": "弟弟", "year": "2022", "date": "11-25", "type": 'new'},
    ],
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
