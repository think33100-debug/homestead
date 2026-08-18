/* 다국어 — 한국어(ko) / English(en) / 日本語(ja)
   HTML 요소에 data-i18n="키" 를 넣으면 자동 치환됩니다. */
var I18N = {
  ko: {
    langName:'한국어',
    // 공통
    home:'← 처음으로', kakao:'💬 카카오톡으로 문의하기', callBtn:'📞 문의사항은 여기로 전화',
    // 홈
    deskBadge:'🛎️ 스마트 안내데스크',
    homeLead:'주차 · 짐 보관 · 퇴실까지<br>필요한 안내를 한 곳에서 도와드립니다.',
    mParkT:'주차 등록', mParkD:'차량 등록 · 출차 시간 공유',
    mBagT:'짐 보관', mBagD:'체크인 전 · 퇴실 후 짐 맡기기',
    mOutT:'퇴실하기', mOutD:'퇴실 완료 알림',
    mTrashT:'쓰레기 배출 안내', mTrashD:'음식물 · 일반 쓰레기 버리는 곳',
    mOptT:'얼리 및 레이트 체크아웃 신청', mOptD:'1시간 20,000원 · 여유스테이 30,000원',
    mTipT:'홈스테드 이용 Tip', mTipD:'도어락 · 세탁실 · 어메니티 · 맛집',
    mWayT:'홈스테드 오시는 길', mWayD:'골목 안 위치 · 찾아오는 방법',
    // 퇴실
    outTitle:'퇴실하기', outLead:'집처럼 편안한 시간 보내셨길 바랍니다.<br>홈스테드 스테이를 이용해 주셔서 진심으로 감사합니다.',
    outG1:'퇴실 전, <b>두고 가시는 물품이 없는지</b> 한 번만 더 확인해 주세요.',
    outG2:'큰 쓰레기는 <b>건물 오른쪽 분리수거장</b>에 버려주시면 정말 감사하겠습니다.',
    outDate:'퇴실 일', nowTime:'현재 시각', outRoom:'이용하신 객실', selectPlease:'선택해주세요',
    outBtn:'퇴실 완료', outDoneT:'퇴실이 완료되었습니다', outDoneD:'조심히 들어가세요. 다음에 또 뵙겠습니다 :)',
    outMsgT:'퇴실을 완료하시겠어요?', outMsgD:'버튼을 누르시면 바로 객실 청소가 시작됩니다. 두고 가신 물품이 없는지 한 번만 더 확인해 주세요!',
    recheck:'다시 확인', outYes:'네, 퇴실할게요',
    fbT:'불편하셨던 점이 있으셨나요?', fbD:'편하게 남겨주시면 꼭 확인하고 보완하겠습니다. 작은 의견도 큰 도움이 됩니다 🙏',
    fbPh:'예: 온수가 늦게 나왔어요 / 수건이 부족했어요', fbBtn:'의견 보내기',
    fbDoneT:'소중한 의견 감사합니다 💚', fbDoneD:'보내주신 내용은 꼭 확인하고 보완하겠습니다.',
    // 쓰레기
    trashTitle:'쓰레기 배출 안내',
    trashBody:'음식물 쓰레기와 일반 쓰레기 모두<br><b>건물 밖 오른쪽 분리수거장</b>에 버려주시면 됩니다.',
    trashThxT:'🙏 다음 손님을 위한 마음',
    trashThxD:'직접 버려주시는 작은 수고가 홈스테드를 더 쾌적하게 만듭니다. 늘 함께 지켜주셔서 진심으로 감사합니다.',
    // 짐보관
    bagTitle:'짐 보관', bagLead:'체크인 전, 짐을 편하게 맡기고 다녀오세요.<br>체크인 당일 오전 8시부터 신청 가능합니다.',
    today:'오늘 날짜',
    bagG1:'짐 보관은 <b>체크인 당일 오전 8시부터</b> 신청 가능합니다.',
    bagG2:'<b>오늘 체크인하시는 분만</b> 신청해 주세요. 미리 신청 시 접수되지 않습니다.',
    bagG3:'짐을 <b>예약하신 방문 옆 복도</b>에 두시면, 객실 정비가 끝난 뒤 <b>저희가 안으로 넣어드립니다.</b>',
    ciDate:'체크인 날짜', bagRoom:'예약하신 객실', bagPlat:'예약하신 플랫폼',
    bagName:'예약자 성함', bagNamePh:'예약자 본인 성함', bagPhone:'연락처',
    bagArrive:'예상 도착시간', bagArriveSub:'(짐 맡기러 오는 시간)',
    bagSubmit:'신청하기', bagLookup:'이미 신청하셨나요? 비밀번호 확인 · 수정 · 취소',
    bagCancel:'🗑️ 짐보관 신청 취소', bagCallHelp:'📞 예약 객실을 모르시겠나요? 문의하기',
    bagWarn:'⚠️ 잘못 신청하셨다면 <b>다시 신청하지 마시고</b>, \'수정 / 취소\'로 변경하시거나 반드시 숙소로 연락 주세요. 중복 신청 시 정비에 혼선이 생깁니다.',
    lateT:'🧳 퇴실 후에도 짐 보관이 가능합니다!',
    lateD:'체크아웃 후에는 지하 창고를 이용하실 수 있어요. 아래 버튼에서 이용 방법을 확인해 주세요.',
    lateBtn:'🧳 퇴실 후 짐 보관하기 →',
    lkBtn:'내 신청 불러오기', close:'닫기', searching:'예약자를 조회하고 있습니다...',
    bagDoneT:'짐 보관 신청이 완료되었습니다', bagDoneD:'입력하신 번호로 <b>비밀번호와 안내</b>를 보내드렸어요 :)',
    entryCode:'공용현관 비밀번호',
    bagD1:'짐은 <b>예약하신 객실 문 옆</b>, 문이 열리는 데 방해되지 않게 놓아주세요.',
    bagD2:'객실 정비가 끝나면 <b>저희가 안으로 옮겨</b> 드립니다.',
    bagD3:'도착시간이 바뀌어도 <b>재신청하지 마시고</b> 그대로 짐 보관해 주세요.',
    sampleCap:'📷 이렇게 놓아주시면 됩니다',
    coldT:'🧊 냉장 · 냉동 보관 안내',
    cold1:'<b>냉장 보관이 필요한 물품</b>은 미리 말씀해 주시면, 짐 보관 시 바로 냉장고에 넣어드립니다.',
    cold2:'<b>냉동 보관</b>은 104호를 제외한 객실에서는 어렵습니다.',
    cold3:'부피가 큰 물품은 냉장 보관이 어려울 수 있습니다 🥲<br>· 일반 레터링 케이크 크기 → 가능<br>· 성심당 망고시루 케이크 크기 → 어려움',
    lateTitle:'🧳 퇴실 후 짐 보관 안내', lateSub:'퇴실 후에는 <b>지하 창고</b> 이용이 가능하십니다!',
    lateHow:'<b>이용 방법</b><br>정문 옆 "STAFF ONLY" 흰색 문이 지하로 내려가는 입구예요.',
    lateS1:'누르고 아래로 내려가 주세요',
    lateS1n:'신청을 완료하시면 <b>지하 창고 비밀번호</b>를 안내해 드립니다.',
    lateHow2:'정문 옆 "STAFF ONLY" 흰색 문에서 위 번호를 누르고 지하로 내려가 주세요.',
    storageCodeLbl:'지하 창고 비밀번호', lateS2:'바닥에 스티커 붙인 자리에 짐을 놓아주세요',
    lateS3:'종이에 성함과 전화번호를 적어 짐에 붙여주세요',
    pickupBy:'<b>당일 오후 6시 전까지</b> 반드시 찾아가 주세요.',
    lateWarn:'⚠️ <b>꼭 확인해 주세요</b><br>· 귀중품은 보관이 어려우니 꼭 소지해 주세요<br>· 당일 오후 6시 전까지 반드시 찾아가 주셔야 합니다<br>· 보관 시 분실 책임을 지지 않으며, 30일 뒤 폐기됩니다',
    lateForm:'보관 신청하기', lateName:'성함', latePhone:'연락처', latePickup:'찾아가실 시간',
    lateDoneT:'보관 신청이 접수되었습니다', lateDoneD:'지하 창고 안내대로 짐을 놓아주시면 됩니다.<br>편안한 하루 보내세요 🌿',
    // 팁
    tipTitle:'홈스테드 이용 Tip', tipLead:'머무시는 동안 알아두시면 좋은<br>소소한 안내를 모았습니다.',
    tip1T:'도어락 안심 잠금', tip1D:'밖에서 절대 열 수 없게 잠그는 방법',
    tip2T:'세탁실 이용 방법', tip2D:'세탁기 · 건조기 · 세제 위치',
    tip3T:'수건 · 어메니티 추가', tip3D:'여분 물품이 있는 곳',
    tip4T:'근처 맛집 & 편의시설', tip4D:'호스트가 직접 추천하는 곳',
    tipKakao:'💬 궁금한 점은 카카오톡으로 문의해 주세요'
  },

  en: {
    langName:'English',
    home:'← Back to Home', kakao:'💬 Contact us on KakaoTalk', callBtn:'📞 Call us',
    deskBadge:'🛎️ Smart Front Desk',
    homeLead:'Parking, luggage storage, check-out —<br>everything you need in one place.',
    mParkT:'Parking Registration', mParkD:'Register your car · share departure time',
    mBagT:'Luggage Storage', mBagD:'Before check-in · after check-out',
    mOutT:'Check Out', mOutD:'Let us know you have left',
    mTrashT:'Waste Disposal Guide', mTrashD:'Where to take food & general waste',
    mOptT:'Early Check-in / Late Check-out', mOptD:'KRW 20,000 per hour · Package KRW 30,000',
    mTipT:'Homestead Tips', mTipD:'Door lock · laundry · amenities · restaurants',
    mWayT:'How to Find Us', mWayD:'We are in a small alley — see directions',
    outTitle:'Check Out', outLead:'We hope you felt at home.<br>Thank you for staying with Homestead Stay.',
    outG1:'Before leaving, please <b>check that nothing is left behind</b>.',
    outG2:'Large waste can be taken to the <b>recycling area on the right side of the building</b>. Thank you!',
    outDate:'Check-out date', nowTime:'Current time', outRoom:'Your room', selectPlease:'Please select',
    outBtn:'Check-out complete', outDoneT:'Check-out completed', outDoneD:'Have a safe trip. We hope to see you again :)',
    outMsgT:'Complete your check-out?', outMsgD:'Housekeeping will start right away. Please make sure nothing is left behind!',
    recheck:'Let me check', outYes:'Yes, I am leaving',
    fbT:'Was there anything inconvenient?', fbD:'Please feel free to tell us. We read every message and will make it better 🙏',
    fbPh:'e.g. Hot water was slow / Not enough towels', fbBtn:'Send feedback',
    fbDoneT:'Thank you for your feedback 💚', fbDoneD:'We will review it carefully and improve.',
    trashTitle:'Waste Disposal Guide',
    trashBody:'Both food waste and general waste go to the<br><b>recycling area outside, on the right side of the building</b>.',
    trashThxT:'🙏 For the next guest',
    trashThxD:'Your small effort keeps Homestead clean and comfortable. Thank you for always taking care of it with us.',
    bagTitle:'Luggage Storage', bagLead:'Leave your luggage and enjoy your day.<br>Available from 8 AM on your check-in day.',
    today:'Today', 
    bagG1:'Luggage storage is available <b>from 8 AM on your check-in day</b>.',
    bagG2:'Please apply <b>only if you check in today</b>. Early requests cannot be accepted.',
    bagG3:'Leave your luggage <b>in the hallway next to your room door</b>. We will bring it inside after housekeeping.',
    ciDate:'Check-in date', bagRoom:'Your room', bagPlat:'Booking platform',
    bagName:'Guest name', bagNamePh:'Name on the booking', bagPhone:'Phone number',
    bagArrive:'Expected arrival', bagArriveSub:'(when you drop off the luggage)',
    bagSubmit:'Submit', bagLookup:'Already applied? Check code · edit · cancel',
    bagCancel:'🗑️ Cancel my request', bagCallHelp:'📞 Not sure about your room? Contact us',
    bagWarn:'⚠️ If you made a mistake, <b>please do not submit again</b> — use "edit / cancel" or contact us. Duplicate requests cause confusion for housekeeping.',
    lateT:'🧳 Storage is also available after check-out!',
    lateD:'You can use the basement storage room after check-out. See the guide below.',
    lateBtn:'🧳 Storage after check-out →',
    lkBtn:'Find my request', close:'Close', searching:'Looking up your booking...',
    bagDoneT:'Your luggage storage request is complete', bagDoneD:'We sent the <b>entrance code and guide</b> to your phone :)',
    entryCode:'Main entrance code',
    bagD1:'Please place your luggage <b>beside your room door</b>, without blocking the door.',
    bagD2:'We will move it inside <b>once housekeeping is finished</b>.',
    bagD3:'If your arrival time changes, <b>no need to reapply</b> — just leave your luggage as planned.',
    sampleCap:'📷 Please place it like this',
    coldT:'🧊 Refrigerated & Frozen Storage',
    cold1:'If you have items that <b>need refrigeration</b>, please let us know in advance and we will put them in the fridge right away.',
    cold2:'<b>Freezer storage</b> is not available except for Room 104.',
    cold3:'Bulky items may not fit in the fridge 🥲<br>· Standard lettering cake size → OK<br>· Extra-large cake (e.g. Sungsimdang Mango Siru) → not possible',
    lateTitle:'🧳 Storage after check-out', lateSub:'You can use the <b>basement storage room</b> after check-out!',
    lateHow:'<b>How to use</b><br>The white "STAFF ONLY" door next to the main entrance leads downstairs.',
    lateS1:'Enter this code and go downstairs',
    lateS1n:'Once your request is submitted, we will show you the <b>basement storage code</b>.',
    lateHow2:'Enter the code above at the white "STAFF ONLY" door next to the main entrance and go downstairs.',
    storageCodeLbl:'Basement storage code', lateS2:'Place your luggage on the marked spot on the floor',
    lateS3:'Write your name and phone number on paper and attach it to your luggage',
    pickupBy:'Please be sure to collect your luggage <b>by 6 PM the same day</b>.',
    lateWarn:'⚠️ <b>Please note</b><br>· Valuables cannot be stored — please keep them with you<br>· Luggage must be collected by 6 PM on the same day<br>· We cannot take responsibility for loss, and items are disposed of after 30 days',
    lateForm:'Request storage', lateName:'Name', latePhone:'Phone number', latePickup:'Pick-up time',
    lateDoneT:'Your request has been received', lateDoneD:'Please leave your luggage as described above.<br>Have a wonderful day 🌿',
    tipTitle:'Homestead Tips', tipLead:'A few helpful things<br>to know during your stay.',
    tip1T:'Door Lock — Inner Lock', tip1D:'How to make the door impossible to open from outside',
    tip2T:'Laundry Room', tip2D:'Washer · dryer · detergent',
    tip3T:'Towels & Amenities', tip3D:'Where to find extras',
    tip4T:'Restaurants & Convenience', tip4D:'Host recommendations nearby',
    tipKakao:'💬 Any questions? Message us on KakaoTalk'
  },

  ja: {
    langName:'日本語',
    home:'← ホームへ', kakao:'💬 カカオトークでお問い合わせ', callBtn:'📞 お電話はこちら',
    deskBadge:'🛎️ スマート案内デスク',
    homeLead:'駐車・荷物預かり・チェックアウトまで<br>必要なご案内をまとめました。',
    mParkT:'駐車登録', mParkD:'車両登録・出庫時間の共有',
    mBagT:'荷物預かり', mBagD:'チェックイン前・チェックアウト後',
    mOutT:'チェックアウト', mOutD:'退室のお知らせ',
    mTrashT:'ゴミ出しのご案内', mTrashD:'生ゴミ・一般ゴミの捨て場所',
    mOptT:'アーリーチェックイン / レイトチェックアウト', mOptD:'1時間 20,000ウォン・パッケージ 30,000ウォン',
    mTipT:'ホームステッド利用のヒント', mTipD:'ドアロック・洗濯室・アメニティ・グルメ',
    mWayT:'アクセス方法', mWayD:'路地の中にあります・道順のご案内',
    outTitle:'チェックアウト', outLead:'我が家のようにお寛ぎいただけましたでしょうか。<br>ホームステッドステイをご利用いただきありがとうございます。',
    outG1:'ご退室前に<b>お忘れ物がないか</b>もう一度ご確認ください。',
    outG2:'大きなゴミは<b>建物右側の分別ゴミ置き場</b>へお願いいたします。',
    outDate:'チェックアウト日', nowTime:'現在時刻', outRoom:'ご利用のお部屋', selectPlease:'選択してください',
    outBtn:'チェックアウト完了', outDoneT:'チェックアウトが完了しました', outDoneD:'お気をつけてお帰りください。またお会いできる日を楽しみにしております :)',
    outMsgT:'チェックアウトを完了しますか？', outMsgD:'ボタンを押すとすぐに清掃が始まります。お忘れ物がないか今一度ご確認ください！',
    recheck:'もう一度確認', outYes:'はい、退室します',
    fbT:'ご不便な点はございませんでしたか？', fbD:'お気軽にお聞かせください。必ず確認し改善いたします 🙏',
    fbPh:'例）お湯が出るのが遅かった / タオルが足りなかった', fbBtn:'送信する',
    fbDoneT:'貴重なご意見ありがとうございます 💚', fbDoneD:'いただいた内容は必ず確認し改善いたします。',
    trashTitle:'ゴミ出しのご案内',
    trashBody:'生ゴミも一般ゴミも<br><b>建物の外・右側の分別ゴミ置き場</b>へお願いいたします。',
    trashThxT:'🙏 次のお客様のために',
    trashThxD:'お手数をおかけしますが、皆さまのご協力でホームステッドはより快適になります。いつもありがとうございます。',
    bagTitle:'荷物預かり', bagLead:'チェックイン前もお荷物を預けて身軽にお出かけください。<br>チェックイン当日の午前8時から申請可能です。',
    today:'本日の日付',
    bagG1:'荷物預かりは<b>チェックイン当日の午前8時から</b>ご利用いただけます。',
    bagG2:'<b>本日チェックインの方のみ</b>お申し込みください。事前申請は受付できません。',
    bagG3:'<b>ご予約のお部屋のドア横の廊下</b>にお荷物を置いていただければ、清掃後に中へお運びいたします。',
    ciDate:'チェックイン日', bagRoom:'ご予約のお部屋', bagPlat:'ご予約サイト',
    bagName:'ご予約者のお名前', bagNamePh:'ご予約者ご本人のお名前', bagPhone:'ご連絡先',
    bagArrive:'到着予定時刻', bagArriveSub:'（お荷物を預けにいらっしゃる時間）',
    bagSubmit:'申請する', bagLookup:'すでに申請された方は こちらで確認・修正・取消',
    bagCancel:'🗑️ 申請を取り消す', bagCallHelp:'📞 お部屋番号が不明な場合はお問い合わせ',
    bagWarn:'⚠️ 誤って申請された場合は<b>再申請せず</b>、「修正・取消」からご変更いただくか宿へご連絡ください。重複申請は清掃に混乱を招きます。',
    lateT:'🧳 チェックアウト後もお荷物をお預かりします！',
    lateD:'チェックアウト後は地下の倉庫をご利用いただけます。下のボタンからご確認ください。',
    lateBtn:'🧳 チェックアウト後の荷物預かり →',
    lkBtn:'申請内容を読み込む', close:'閉じる', searching:'ご予約を確認しております...',
    bagDoneT:'荷物預かりの申請が完了しました', bagDoneD:'ご入力の番号へ<b>暗証番号とご案内</b>をお送りしました :)',
    entryCode:'共同玄関の暗証番号',
    bagD1:'お荷物は<b>ご予約のお部屋のドア横</b>に、ドアの開閉の妨げにならないようお置きください。',
    bagD2:'清掃が終わり次第<b>中へお運びいたします</b>。',
    bagD3:'到着時間が変わっても<b>再申請は不要</b>です。そのままお預けください。',
    sampleCap:'📷 このように置いてください',
    coldT:'🧊 冷蔵・冷凍保管のご案内',
    cold1:'<b>冷蔵保管が必要なお品物</b>は事前にお知らせいただければ、お預かり時にすぐ冷蔵庫へお入れいたします。',
    cold2:'<b>冷凍保管</b>は104号室を除き承ることができません。',
    cold3:'かさばるお品物は冷蔵保管が難しい場合がございます 🥲<br>· 一般的なレタリングケーキのサイズ → 可能<br>· 特大サイズのケーキ（聖心堂マンゴーシルなど）→ 不可',
    lateTitle:'🧳 チェックアウト後の荷物預かり', lateSub:'チェックアウト後は<b>地下倉庫</b>をご利用いただけます！',
    lateHow:'<b>ご利用方法</b><br>正面玄関横の「STAFF ONLY」と書かれた白い扉が地下への入口です。',
    lateS1:'この番号を押して地下へお進みください',
    lateS1n:'お申し込みが完了しますと、<b>地下倉庫の暗証番号</b>をご案内いたします。',
    lateHow2:'正面玄関横の「STAFF ONLY」の白い扉で上記の番号を押し、地下へお進みください。',
    storageCodeLbl:'地下倉庫の暗証番号', lateS2:'床のステッカーの位置にお荷物を置いてください',
    lateS3:'紙にお名前と電話番号をご記入のうえ、お荷物に貼ってください',
    pickupBy:'<b>当日午後6時まで</b>に必ずお引き取りください。',
    lateWarn:'⚠️ <b>必ずご確認ください</b><br>· 貴重品はお預かりできません。必ずお持ちください<br>· 当日午後6時までに必ずお引き取りください<br>· 紛失の責任は負いかねます。30日後に処分いたします',
    lateForm:'預かりを申請する', lateName:'お名前', latePhone:'ご連絡先', latePickup:'お引き取り予定時刻',
    lateDoneT:'申請を受け付けました', lateDoneD:'ご案内のとおりお荷物をお置きください。<br>素敵な一日をお過ごしください 🌿',
    tipTitle:'ホームステッド利用のヒント', tipLead:'ご滞在中に知っておくと便利な<br>ちょっとしたご案内です。',
    tip1T:'ドアロック（内側ロック）', tip1D:'外から絶対に開けられない状態にする方法',
    tip2T:'洗濯室のご利用方法', tip2D:'洗濯機・乾燥機・洗剤の場所',
    tip3T:'タオル・アメニティの追加', tip3D:'予備の備品がある場所',
    tip4T:'近くのグルメ・コンビニ', tip4D:'ホストおすすめのお店',
    tipKakao:'💬 ご不明な点はカカオトークでお問い合わせください'
  },

  zh: {
    langName:'简体中文',
    home:'← 返回首页', kakao:'💬 通过 KakaoTalk 咨询', callBtn:'📞 电话咨询',
    deskBadge:'🛎️ 智能前台',
    homeLead:'停车、行李寄存、退房——<br>您需要的指引都在这里。',
    mParkT:'停车登记', mParkD:'登记车辆 · 共享出车时间',
    mBagT:'行李寄存', mBagD:'入住前 · 退房后均可寄存',
    mOutT:'办理退房', mOutD:'退房完成通知',
    mTrashT:'垃圾投放指南', mTrashD:'厨余垃圾与一般垃圾的投放点',
    mOptT:'提前入住 / 延迟退房申请', mOptD:'每小时 20,000韩元 · 套餐 30,000韩元',
    mTipT:'住宿小贴士', mTipD:'门锁 · 洗衣房 · 备品 · 美食',
    mWayT:'交通路线', mWayD:'我们位于小巷内 · 查看路线',
    outTitle:'办理退房', outLead:'希望您在这里住得像在家一样舒适。<br>感谢您选择 Homestead Stay。',
    outG1:'离开前请<b>再确认一次是否有遗留物品</b>。',
    outG2:'大件垃圾请投放至<b>楼外右侧的分类回收处</b>，非常感谢！',
    outDate:'退房日期', nowTime:'当前时间', outRoom:'您入住的房间', selectPlease:'请选择',
    outBtn:'退房完成', outDoneT:'退房已完成', outDoneD:'祝您旅途平安，期待再次相见 :)',
    outMsgT:'确认办理退房吗？', outMsgD:'点击后将立即开始客房清洁。请再确认一次是否有遗留物品！',
    recheck:'再确认一下', outYes:'是，我要退房',
    fbT:'有什么不便之处吗？', fbD:'欢迎随时告诉我们，我们会认真查看并改进 🙏',
    fbPh:'例如：热水来得慢 / 毛巾不够', fbBtn:'发送意见',
    fbDoneT:'感谢您的宝贵意见 💚', fbDoneD:'我们会认真查看并加以改进。',
    trashTitle:'垃圾投放指南',
    trashBody:'厨余垃圾与一般垃圾均请投放至<br><b>楼外右侧的分类回收处</b>。',
    trashThxT:'🙏 为了下一位客人',
    trashThxD:'您的这份小小心意让 Homestead 更加整洁舒适。一直以来的配合，我们真心感谢。',
    bagTitle:'行李寄存', bagLead:'入住前可先寄存行李，轻松出门游玩。<br>入住当天上午8点起可申请。',
    today:'今天日期',
    bagG1:'行李寄存自<b>入住当天上午8点起</b>可申请。',
    bagG2:'请<b>仅在当天入住</b>时申请。提前申请将无法受理。',
    bagG3:'请将行李放在<b>您预订房间门旁的走廊</b>，客房整理完毕后我们会帮您搬进房内。',
    ciDate:'入住日期', bagRoom:'您预订的房间', bagPlat:'预订平台',
    bagName:'预订人姓名', bagNamePh:'预订本人姓名', bagPhone:'联系电话',
    bagArrive:'预计到达时间', bagArriveSub:'（送行李过来的时间）',
    bagSubmit:'提交申请', bagLookup:'已经申请过了？查看密码 · 修改 · 取消',
    bagCancel:'🗑️ 取消寄存申请', bagCallHelp:'📞 不清楚房间号？请联系我们',
    bagWarn:'⚠️ 如果填错了，<b>请勿重复申请</b>，请通过「修改 / 取消」更改或直接联系我们。重复申请会造成客房整理混乱。',
    lateT:'🧳 退房后也可以寄存行李！',
    lateD:'退房后可使用地下储物间。请查看下方的使用方法。',
    lateBtn:'🧳 退房后寄存行李 →',
    lkBtn:'读取我的申请', close:'关闭', searching:'正在查询您的预订...',
    bagDoneT:'行李寄存申请已完成', bagDoneD:'我们已将<b>密码与指引</b>发送至您填写的号码 :)',
    entryCode:'公共大门密码',
    bagD1:'请将行李放在<b>您预订房间的门旁</b>，注意不要挡住门的开合。',
    bagD2:'客房整理完成后<b>我们会帮您搬进房内</b>。',
    bagD3:'即使到达时间有变，<b>也无需重新申请</b>，按原计划寄存即可。',
    sampleCap:'📷 请像这样放置',
    coldT:'🧊 冷藏 · 冷冻寄存说明',
    cold1:'如有<b>需要冷藏</b>的物品，请提前告知，我们会在寄存时立即放入冰箱。',
    cold2:'<b>冷冻寄存</b>除104号房外无法提供。',
    cold3:'体积较大的物品可能无法放入冰箱 🥲<br>· 普通字牌蛋糕大小 → 可以<br>· 超大尺寸蛋糕（如圣心堂芒果蛋糕）→ 无法提供',
    lateTitle:'🧳 退房后行李寄存', lateSub:'退房后可使用<b>地下储物间</b>！',
    lateHow:'<b>使用方法</b><br>正门旁标有「STAFF ONLY」的白色门是通往地下的入口。',
    lateS1:'输入此密码后下楼',
    lateS1n:'完成申请后，我们将告知您<b>地下储物间密码</b>。',
    lateHow2:'请在正门旁标有「STAFF ONLY」的白色门处输入上方密码后下楼。',
    storageCodeLbl:'地下储物间密码', lateS2:'请将行李放在地面贴有贴纸的位置',
    lateS3:'请在纸上写下姓名和电话号码并贴在行李上',
    pickupBy:'请务必在<b>当天下午6点前</b>取回行李。',
    lateWarn:'⚠️ <b>请务必确认</b><br>· 贵重物品无法寄存，请随身携带<br>· 请务必在当天下午6点前取回行李<br>· 我们无法承担丢失责任，物品将在30天后处理',
    lateForm:'申请寄存', lateName:'姓名', latePhone:'联系电话', latePickup:'预计取回时间',
    lateDoneT:'寄存申请已受理', lateDoneD:'请按上述指引放置行李。<br>祝您度过美好的一天 🌿',
    tipTitle:'住宿小贴士', tipLead:'为您整理了入住期间<br>值得了解的小提示。',
    tip1T:'门锁 · 内部反锁', tip1D:'让门从外面完全无法打开的方法',
    tip2T:'洗衣房使用方法', tip2D:'洗衣机 · 干衣机 · 洗涤剂位置',
    tip3T:'毛巾 · 备品补充', tip3D:'备用物品存放处',
    tip4T:'周边美食 & 便利设施', tip4D:'房东亲自推荐',
    tipKakao:'💬 有任何疑问请通过 KakaoTalk 咨询'
  }
};

function getLang(){
  try { var v = localStorage.getItem('hs_lang'); if (v && I18N[v]) return v; } catch(e){}
  var n = (navigator.language || 'ko').toLowerCase();
  if (n.indexOf('ja') === 0) return 'ja';
  if (n.indexOf('zh') === 0) return 'zh';
  if (n.indexOf('ko') === 0) return 'ko';
  return n.indexOf('en') === 0 ? 'en' : 'ko';
}

function setLang(l){
  if (!I18N[l]) l = 'ko';
  try { localStorage.setItem('hs_lang', l); } catch(e){}
  applyLang(l);
}

function applyLang(l){
  var d = I18N[l] || I18N.ko;
  document.documentElement.lang = (l === 'ja' ? 'ja' : (l === 'en' ? 'en' : (l === 'zh' ? 'zh-CN' : 'ko')));
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.getAttribute('data-i18n');
    if (d[k] != null) el.innerHTML = d[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    var k = el.getAttribute('data-i18n-ph');
    if (d[k] != null) el.setAttribute('placeholder', d[k]);
  });
  document.querySelectorAll('.langbtn').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-l') === l);
  });
  window.LANG = l;
}

// 언어 선택 바 삽입 (페이지 우측 상단)
function initLangBar(){
  var bar = document.getElementById('langBar');
  if (!bar) return;
  var NAMES = { ko:'한국어', en:'EN', ja:'日本語', zh:'中文' };
  bar.innerHTML = ['ko','en','ja','zh'].map(function(l){
    return '<button class="langbtn" data-l="'+l+'">'+NAMES[l]+'</button>';
  }).join('');
  bar.querySelectorAll('.langbtn').forEach(function(b){
    b.addEventListener('click', function(){ setLang(this.getAttribute('data-l')); });
  });
  applyLang(getLang());
}
document.addEventListener('DOMContentLoaded', initLangBar);
