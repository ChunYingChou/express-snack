# 2023台南精選小吃網站

使用node.js的web應用框架Express.js設定動態路由，搭配樣板引擎handlebars讀取json檔案，並製作搜尋功能可搜尋台南精選的特色小吃。
<br />
<br />

## 線上部署後的網站

<br />
<br />

## 專案介紹

- header區塊導覽列(Navbar)的Home和About連結
        
  - Home：點擊立即回到首頁
  - About：點擊後即跳出modal描述關於此專案的資訊
  <br />
  <br />
      
- main區塊上方的搜尋欄  
  
  - 輸入小吃名稱或食物類別後，按下search按鈕則會篩選出符合條件的小吃
  - 預設狀態都沒有輸入關鍵字的話，則會列出所有清單
  <br />
  <br />

- main區塊中間的小吃圖文
  
  - 點擊個別圖片或文字即可跳轉至該小吃的詳細資訊的頁面，包含：地址、電話、營業時間、Google評價等級
  - 進入小吃的詳細資訊頁面後點擊上一頁即可返回首頁（或可點擊導覽列的icon和標題）
  <br />
  <br />
  
- main區塊下方的Alert視窗
  
  - 特別告知此網頁有關小吃的圖文資訊皆是來自於ELLE網站的報導文

  <br />
  <br />

## 專案畫面
  <br />

![圖片](https://upload.cc/i1/2023/06/02/ewfiOL.jpg)
  <br />
  <br />

## 使用指南

1. 將專案 clone 至本地，至終端機輸入：

   ```
   git clone https://github.com/ChunYingChou/express-snack.git
   ```
   
2. 在終端機中輸入以下文字進入專案資料夾：

   ```
   cd express-snack
   ```
   
3. 進入專案資料夾後，在終端機中輸入以下：

   ```
   node app.js
   ```
   
4. 待終端機跳出 "Express is listening on localhost:3300" 的訊息
  <br />
   
5. 打開瀏覽器網址列輸入 "http://localhost:3300/" ，即可瀏覽此專案。
  <br />
  <br />


## Contributor 專案開發人員

- [Ashley Chou](https://github.com/ChunYingChou)

