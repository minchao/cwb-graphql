import { makeExecutableSchema } from "graphql-tools";

const schemaString = `
  type Query {
    thirtySixHourWeatherForecast(locations: [Location]): [ThirtySixHourWeatherForecast]
  }
  
  type ThirtySixHourWeatherForecast {
    "資料集描述"
    description: String!
    locations: [WeatherForecastLocation]
  }
  
  type WeatherForecastLocation {
    "地區"
    name: String!
    "天氣現象"
    Wx: [WxElement]
    "降雨機率"
    PoP: [PoPElement]
    "舒適度"
    CI: [CIElement]
    "最低溫度"
    MinT: [TempElement]
    "最高溫度"
    MaxT: [TempElement]
  }
  
  type WxElement {
    startTime: String!
    endTime: String!
    "天氣現象描述"
    name: String!
    "天氣現象代碼"
    value: Int!
  }
  
  type PoPElement {
    startTime: String!
    endTime: String!
    "百分比"
    name: Int!
  }
  
  type CIElement {
    startTime: String!
    endTime: String!
    "舒適度描述"
    name: String!
  }
  
  type TempElement {
    startTime: String!
    endTime: String!
    "攝氏溫度"
    name: Int!
  }
 
  enum Location {
    YilanCounty
    HualienCounty
    TaitungCounty
    PenghuCounty
    KinmenCounty
    LienchiangCounty
    TaipeiCity
    NewTaipeiCity
    TaoyuanCity
    TaichungCity
    TainanCity
    KaohsiungCity
    KeelungCity
    HsinchuCounty
    HsinchuCity
    MiaoliCounty
    ChanghuaCounty
    NantouCounty
    YunlinCounty
    ChiayiCounty
    ChiayiCity
    PingtungCounty
  }
`;

const resolvers = {
  Query: {}
};

export const CwbSchema = makeExecutableSchema({
  typeDefs: schemaString,
  resolvers
});
