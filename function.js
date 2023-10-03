const cardSection = document.querySelector(".card-container");
const imgBaseUrl = "https://img.gamewith.jp/article_tools/pokemon-sv/gacha/";

// ============ data數據 ============ 
const pokenmon_user = {
    "data": [{
        id: 1,
        p_number: 150,
        p_name: 'ミュウツー',
        p_type: "psychic",
        p_level: 6,
        p_detail: "終了済み",
        p_user_comment: "主ミライドン金属音3回当てたら竜波撃ちます 他サポお願いします"
    }, {
        id: 2,
        p_number: 149,
        p_name: 'カイリュー',
        p_type: "ghost",
        p_level: 6,
        p_detail: "終了済み",
        p_user_comment: "じしんかじょうなので死なないようにお願いします"
    }, {
        id: 3,
        p_number: 130,
        p_name: 'ギャラドス',
        p_type: "dragon",
        p_level: 5,
        p_detail: "終了済み",
        p_user_comment: "主テツノカイナ　ちょうはつ・リフレクター使える方つめとぎ、ドリルくちばし、ボディプレス、おいかぜ"
    }, {
        id: 4,
        p_number: 1010,
        p_name: 'コノヨザル',
        p_type: "dragon",
        p_level: 3,
        p_detail: "終了済み",
        p_user_comment: "いやなおと　いけどん　てだすけ"
    }, {
        id: 5,
        p_number: 928,
        p_name: 'リキキリン',
        p_type: "ice",
        p_level: 6,
        p_detail: "終了済み",
        p_user_comment: "スパ４　配信中　#BHpk"
    }, {
        id: 6,
        p_number: 143,
        p_name: 'カビゴン',
        p_type: "poison",
        p_level: 7,
        p_detail: "終了済み",
        p_user_comment: "嫌な音 手助け 主アタッカー"
    }]
}

// ============ 打印data數據 ============ 
pokenmon_user.data.forEach(function (item, index) {
    console.log(item, "索引：", index);
    //置入到頁面中
    cardSection.insertBefore(cardElement(item), cardSection.children[index]);//調用 卡片元件
});

// ============ 卡片元件 ============ 
function cardHeader(item) {
    // ====== 創建元素 ====== 
    const cardHead = document.createElement("div");
    cardHead.classList.add("card__header");

    // label標籤
    const labelLightRed = document.createElement("span");
    labelLightRed.classList.add("card__labelLightRed", "mg_r_4");
    labelLightRed.innerHTML = "終了";

    // pokemon圖片區塊
    const cardItem = document.createElement("p");
    cardItem.classList.add("card__item");
    const linkItem = document.createElement("a");
    cardItem.appendChild(linkItem);
    // pokemon圖片
    const imgItem = document.createElement("img");
    imgItem.classList.add("card__item__img", "mg_r_4");
    imgItem.setAttribute("src", `${imgBaseUrl}${item.p_number}.png`);//網址更換
    linkItem.appendChild(imgItem);

    // 標題名稱
    const headName = document.createElement("p");
    headName.classList.add("card__item__head_name");
    headName.style.marginRight = "8px";
    headName.innerHTML = `<a href="#">${item.p_name}</a>`;//更換

    // pokemon屬性圖片
    const imgLabelItem = document.createElement("img");
    imgLabelItem.classList.add("card__item__icon", "mg_r_4");
    imgLabelItem.setAttribute("src", `${imgBaseUrl}${item.p_type}.png`);//網址更換

    // 右側訊息
    const info_r = document.createElement("div");
    info_r.classList.add("card__item__flexNoBorder");
    // 星星
    const starWrap = document.createElement("p");
    starWrap.classList.add("card__item__head_starWrap");
    starWrap.innerHTML = `<span class="card__item__star">★ </span>${item.p_level}`;//更換
    // 時間
    const timeWrap = document.createElement("div");
    timeWrap.classList.add("card__item__timeWrapper");

    const timeDescription = document.createElement("div");
    timeDescription.classList.add("card__item__timeDescription");
    timeDescription.innerHTML = "残り時間";//更換
    timeWrap.appendChild(timeDescription);

    const timeRemaining = document.createElement("div");
    timeRemaining.classList.add("card__item__timeRemaining");
    timeRemaining.innerHTML = `-:--`;//更換

    timeWrap.appendChild(timeDescription);
    timeWrap.appendChild(timeRemaining);

    info_r.appendChild(starWrap);
    info_r.appendChild(timeWrap);

    // 插入元素到cardHead
    cardHead.appendChild(labelLightRed);
    cardHead.appendChild(linkItem);
    cardHead.appendChild(headName);
    cardHead.appendChild(imgLabelItem);
    cardHead.appendChild(info_r);

    // ====== 導出元素 ====== 
    return cardHead;
}
function cardDetail(item) {
    // ====== 創建元素 ====== 
    const cardItem_mid = document.createElement("div");
    cardItem_mid.classList.add("card__item__flexNoBorder", "mg_t_4");

    const cardItemDetail = document.createElement("div");
    cardItemDetail.classList.add("card__item__detail");

    const cardDetailDescription = document.createElement("p");
    cardDetailDescription.classList.add("card__item__detail__description");
    cardDetailDescription.innerHTML = `${item.p_detail}`;//更換

    cardItem_mid.appendChild(cardItemDetail);
    cardItemDetail.appendChild(cardDetailDescription);

    // ====== 導出元素 ====== 
    return cardItem_mid;
}
function cardInfo(item) {
    const cardItem_info = document.createElement("div");
    cardItem_info.classList.add("card__item__infoSpaceBetween", "mg_t_4");

    // 用戶留言區
    const cardItem_commentWrap = document.createElement("div");
    const cardItem_comment = document.createElement("div");
    cardItem_comment.classList.add("card__item__detail__commentSimple");
    cardItem_comment.innerHTML = `<span>${item.p_user_comment}</span>`;

    cardItem_commentWrap.appendChild(cardItem_comment);

    // 通報按鈕
    const cardItem_reportWrap = document.createElement("div");
    const cardItem_report = document.createElement("span");
    cardItem_report.classList.add("card__item__report");

    const cardItem_reportLink = document.createElement("span");
    cardItem_reportLink.classList.add("card__itemm__reportLink");

    cardItem_reportWrap.appendChild(cardItem_report);
    cardItem_report.appendChild(cardItem_reportLink);
    cardItem_reportLink.innerHTML = `<a>通報</a>`;


    cardItem_info.appendChild(cardItem_commentWrap);
    cardItem_info.appendChild(cardItem_reportWrap);

    return cardItem_info;
}
function cardElement(item) {

    const newCard = document.createElement("div");
    newCard.classList.add("card");

    //引入元件
    const getCardHead = cardHeader(item);
    const getCardItemDetail = cardDetail(item);
    const getCardInfo = cardInfo(item);

    //一共3個區塊
    newCard.appendChild(getCardHead);
    newCard.appendChild(getCardItemDetail);
    newCard.appendChild(getCardInfo);

    return newCard;
}
