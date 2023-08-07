// [{Name, Img, Aisyou, Blood, Birthday, Birthplace, Interest}]
let loveMemberList = [{ Name: '大谷映美里', Img: 'emiri', Aisyou: 'みりにゃ', Blood: 'O型', Birthday: '1998/03/15', Birthplace: '東京都', Interest: '美妝流行、拉麵巡禮', Twitter: 'https://twitter.com/otani_emiri' },
{ Name: '大場花菜', Img: 'hana', Aisyou: 'はなちゃん', Blood: 'A型', Birthday: '2000/02/04', Birthplace: '埼玉縣', Interest: '舞台劇及音樂劇賞析', Twitter: 'https://twitter.com/hana_oba' },
{ Name: '音嶋莉沙', Img: 'risa', Aisyou: 'りさちゃん', Blood: 'B型', Birthday: '1998/08/11', Birthplace: '福岡縣', Interest: '收集化妝品、人類觀察', Twitter: 'https://twitter.com/otoshima_risa' },
{ Name: '齋藤樹愛羅', Img: 'kiara', Aisyou: 'きあら', Blood: 'B型', Birthday: '2004/11/26', Birthplace: '栃木県', Interest: '遊戲、卡拉OK', Twitter: 'https://twitter.com/saitou_kiara' },
{ Name: '佐々木舞香', Img: 'maika', Aisyou: 'まいか', Blood: 'A型', Birthday: '2000/01/21', Birthplace: '愛知縣', Interest: '睡覺', Twitter: 'https://twitter.com/sasaki_maika' },
{ Name: '髙松瞳', Img: 'hitomi', Aisyou: 'ひとみん', Blood: 'AB型', Birthday: '2001/01/19', Birthplace: '東京都', Interest: '電影及戲劇賞析', Twitter: 'https://twitter.com/takamatsuhitomi' },
{ Name: '瀧脇笙古', Img: 'shoko', Aisyou: 'しょこ', Blood: 'O型', Birthday: '2001/07/09', Birthplace: '神奈川縣', Interest: '料理、橫濱散策', Twitter: 'https://twitter.com/shoko_takiwaki' },
{ Name: '野口衣織', Img: 'iori', Aisyou: 'いおり', Blood: 'O型', Birthday: '2000/04/26', Birthplace: '茨城縣', Interest: '遊戲、漫畫、動畫', Twitter: 'https://twitter.com/noguchi_iori' },
{ Name: '諸橋沙夏', Img: 'sana', Aisyou: 'さなつん', Blood: 'B型', Birthday: '1996/08/03', Birthplace: '福島縣', Interest: '電影賞析', Twitter: 'https://twitter.com/morohashi_sana' },
{ Name: '山本杏奈', Img: 'anna', Aisyou: 'あんにゃ', Blood: 'A型', Birthday: '1997/11/30', Birthplace: '廣島縣', Interest: '棒球、舞蹈、料理', Twitter: 'https://twitter.com/yamamoto_anna_' }
]
let meMemberList = [{ Name: '尾木波菜', Img: 'hana', Aisyou: 'はにゃたん', Blood: 'B型', Birthday: '2003/05/08', Birthplace: '千葉縣', Interest: '收集漫畫及動畫周邊', Twitter: 'https://twitter.com/ogi_hana_' },
{ Name: '落合希来里', Img: 'kirari', Aisyou: 'きらりん', Blood: 'B型', Birthday: '2001/05/22', Birthplace: '栃木縣', Interest: '搜尋麵包店', Twitter: 'https://twitter.com/ochiai_kirari' },
{ Name: '蟹沢萌子', Img: 'moeko', Aisyou: '萌ちゃん', Blood: 'B型', Birthday: '1999/10/25', Birthplace: '神奈川縣', Interest: '閱讀、攝影、棒球', Twitter: 'https://twitter.com/kanisawa_moeko' },
{ Name: '河口夏音', Img: 'natsune', Aisyou: 'なっちゃん', Blood: 'A型', Birthday: '2001/07/29', Birthplace: '廣島縣', Interest: '偶像鑑賞、恐怖片', Twitter: 'https://twitter.com/kawaguchi_natsu' },
{ Name: '川中子奈月心', Img: 'natsumi', Aisyou: 'なつみん', Blood: 'A型', Birthday: '2005/09/26', Birthplace: '東京都', Interest: '雙關語、特攝片', Twitter: 'https://twitter.com/kawanagonatsumi' },
{ Name: '櫻井もも', Img: 'momo', Aisyou: 'ももきゅん', Blood: 'A型', Birthday: '2004/04/13', Birthplace: '神奈川縣', Interest: '自我提升、照鏡子', Twitter: 'https://twitter.com/_sakurai_momo_' },
{ Name: '菅波美玲', Img: 'mirei', Aisyou: 'みれい', Blood: 'O型', Birthday: '2000/02/05', Birthplace: '福島縣', Interest: '動畫及綜藝節目、臨摹', Twitter: 'https://twitter.com/suganami_mirei' },
{ Name: '鈴木瞳美', Img: 'hitomi', Aisyou: 'ひぃちゃん', Blood: 'B型', Birthday: '2001/04/13', Birthplace: '東京都', Interest: '欣賞定點相片', Twitter: 'https://twitter.com/suzuki_hitomi_' },
{ Name: '谷崎早耶', Img: 'saya', Aisyou: 'さややん', Blood: 'B型', Birthday: '1999/10/07', Birthplace: '熊本縣', Interest: '漫畫、Lovelive', Twitter: 'https://twitter.com/tanizaki_saya' },
{ Name: '冨田菜々風', Img: 'nanaka', Aisyou: 'なんかちゃん', Blood: 'A型', Birthday: '2000/07/17', Birthplace: '鹿兒島縣', Interest: '占卜', Twitter: 'https://twitter.com/tomita_nanaka' },
{ Name: '永田詩央里', Img: 'shiori', Aisyou: 'しおりん', Blood: 'A型', Birthday: '2004/04/02', Birthplace: '廣島縣', Interest: '搜尋音樂、聽廣播、書店巡禮', Twitter: 'https://twitter.com/nagata_shiori_' },
{ Name: '本田珠由記', Img: 'miyuki', Aisyou: 'みるてん', Blood: 'AB型', Birthday: '2004/02/27', Birthplace: '栃木縣', Interest: '欣賞食物照片、星象館欣賞星空', Twitter: 'https://twitter.com/honda_miyuki_' }
]
let joyMemberList = [{ Name: '逢田珠里依', Img: 'jurii', Aisyou: 'じゅりい', Blood: 'O型', Birthday: '2005/09/13', Birthplace: '東京都', Interest: '', Twitter: 'https://twitter.com/aida_jurii' },
{ Name: '天野香乃愛', Img: 'konoa', Aisyou: 'このたん', Blood: 'O型', Birthday: '2007/01/21', Birthplace: '埼玉縣', Interest: '', Twitter: 'https://twitter.com/amano_konoa' },
{ Name: '市原愛弓', Img: 'ayumi', Aisyou: 'あゆみん', Blood: 'A型', Birthday: '2003/08/21', Birthplace: '福岡縣', Interest: '', Twitter: 'https://twitter.com/ichihara_ayumi_' },
{ Name: '江角怜音', Img: 'renon', Aisyou: 'れのん', Blood: 'B型', Birthday: '2005/04/26', Birthplace: '大阪府', Interest: '', Twitter: 'https://twitter.com/esumi_renon' },
{ Name: '大信田美月', Img: 'mitsuki', Aisyou: 'みっちゃん', Blood: 'O型', Birthday: '2004/09/27', Birthplace: '大阪府', Interest: '', Twitter: 'https://twitter.com/oshida_mitsuki' },
{ Name: '大西葵', Img: 'aoi', Aisyou: 'あおい', Blood: 'B型', Birthday: '2005/08/06', Birthplace: '東京都', Interest: '', Twitter: 'https://twitter.com/onishi_aoi' },
{ Name: '小澤愛実', Img: 'aimi', Aisyou: 'あいみ', Blood: '', Birthday: '2003/04/09', Birthplace: '神奈川縣', Interest: '', Twitter: 'https://twitter.com/ozawa_aimi__' },
{ Name: '髙橋舞', Img: 'mai', Aisyou: 'まいまい', Blood: 'O型', Birthday: '2005/02/22', Birthplace: '兵庫縣', Interest: '', Twitter: 'https://twitter.com/takahashi_mai__' },
{ Name: '藤沢莉子', Img: 'riko', Aisyou: 'りこ', Blood: 'B型', Birthday: '2004/01/16', Birthplace: '埼玉縣', Interest: '', Twitter: 'https://twitter.com/fujisawa_riko' },
{ Name: '村山結香', Img: 'yuuka', Aisyou: 'ゆうか', Blood: 'O型', Birthday: '2004/02/15', Birthplace: '福岡縣', Interest: '', Twitter: 'https://twitter.com/murayama_yuuka' },
{ Name: '山田杏佳', Img: 'momoka', Aisyou: 'ももちゃん', Blood: 'O型', Birthday: '2006/02/02', Birthplace: '神奈川縣', Interest: '', Twitter: 'https://twitter.com/yamada_momoka__' },
{ Name: '山野愛月', Img: 'arisu', Aisyou: 'ありす', Blood: 'A型', Birthday: '2006/10/21', Birthplace: '大阪府', Interest: '', Twitter: 'https://twitter.com/yamano_arisu' }
]

// [{Name, Category, AllType[], TypeA{CD, DVD} Type... }]
// 新增項目要到SCSS改數量，說明文字才不會跑錯位置
// 單曲
let loveSingleList = [{ Name: 'この空がトリガー', Category: 's13', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD', 'TypeE'], TypeA: { CD: 'Junkies', DVD: 'この空がトリガー Music Video / この空がトリガー メイキング映像' }, TypeB: { CD: 'ラブクリエイト', DVD: 'イコラブ社員旅行 in 北海道 -前編-' }, TypeC: { CD: 'Kiara Tiara', DVD: 'イコラブ社員旅行 in 北海道 -後編-' }, TypeD: { CD: 'スイートシックスティーン(≒JOY)', DVD: 'スイートシックスティーン Music Video / スイートシックスティーン メイキング映像' }, TypeE: { CD: 'Junkies / ラブクリエイト / Kiara Tiara' }, YtLink: 'https://www.youtube.com/embed/20QJax8CwQo' },
{ Name: 'Be Selfish', Category: 's12', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD', 'TypeE'], TypeA: { CD: '好きって、言えなかった', DVD: 'Be Selfish Music Video / Be Selfish メイキング映像' }, TypeB: { CD: 'わたし、魔法使い', DVD: 'イコラブ社員旅行 in 沖縄 DAY-1 ～さなつんドッキリＭＶ撮影編' }, TypeC: { CD: '真夜中マーメイド', DVD: 'イコラブ社員旅行 in 沖縄 DAY-2 ～海と山！大自然満喫編' }, TypeD: { CD: '笑ってフラジール(≒JOY)', DVD: '笑ってフラジール Music Video / 笑ってフラジール メイキング映像' }, TypeE: { CD: '好きって、言えなかった / わたし、魔法使い / 真夜中マーメイド' }, YtLink: 'https://www.youtube.com/embed/suf7S4AKdmY' },
{ Name: 'あの子コンプレックス', Category: 's11', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD'], TypeA: { CD: '笑顔のレシピ', DVD: 'あの子コンプレックス Music Video / あの子コンプレックス メイキング映像' }, TypeB: { CD: '知らんけど', DVD: 'イコラブ社員研修~イレブンHOUSE~前編' }, TypeC: { CD: '僕のヒロイン', DVD: 'イコラブ社員研修~イレブンHOUSE~後編' }, TypeD: { CD: '笑顔のレシピ/知らんけど/僕のヒロイン' }, YtLink: 'https://www.youtube.com/embed/ShbfYtAPXuI' },
{ Name: 'The 5th', Category: 's10', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD'], TypeA: { CD: 'お姫様にしてよ！', DVD: 'The 5th Music Video/The 5th メイキング映像' }, TypeB: { CD: 'Poison Girl', DVD: 'イコラブ社員研修～鬼ごっこ激走編～' }, TypeC: { CD: 'BPM170の君へ', DVD: 'イコラブ社員研修～鬼ごっこ対決編～' }, TypeD: { CD: 'お姫様にしてよ！/Poison Girl/BPM170の君へ' }, YtLink: 'https://www.youtube.com/embed/Q1-yYjZqk7o' },
{ Name: 'ウィークエンドシトロン', Category: 's09', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD'], TypeA: { CD: 'ズッ友案件', DVD: 'ウィークエンドシトロン Music Video/ウィークエンドシトロン メイキング映像' }, TypeB: { CD: '夏祭り恋慕う', DVD: 'イコラブ社員研修 人狼ゲーム Ⅰ 嘘つき編' }, TypeC: { CD: '祝祭', DVD: 'イコラブ社員研修 人狼ゲーム Ⅱ 騙し合い編' }, TypeD: { CD: 'ズッ友案件/夏祭り恋慕う/祝祭' }, YtLink: 'https://www.youtube.com/embed/skgh3juWdFU' },
{ Name: '青春“サブリミナル”', Category: 's08', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD'], TypeA: { CD: 'しゅきぴ', DVD: '青春“サブリミナル” Music Video/青春“サブリミナル” メイキング映像' }, TypeB: { CD: '流星群', DVD: 'イコラブの夏キャンプ(=LOVE / ≠ME夏の課外研修)/ノイミーの赤岳登山(=LOVE / ≠ME夏の課外研修)' }, TypeC: { CD: 'P.I.C(≠ME)', DVD: 'P.I.C. Music Video/P.I.C. メイキング映像' }, TypeD: { CD: 'しゅきぴ/流星群/P.I.C(≠ME)' }, YtLink: 'https://www.youtube.com/embed/8id6i_QeNJM' },
{ Name: 'CAMEO', Category: 's07', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD'], TypeA: { CD: '「君と私の歌」', DVD: 'CAMEO Music Video/CAMEO メイキング映像' }, TypeB: { CD: 'My Voice Is For You', DVD: '「イコラブ&ノイミー社員旅行2020 in 雪山」' }, TypeC: { CD: '「君と僕の歌」(≠ME)', DVD: '「君と僕の歌」 Music Video/「君と僕の歌」 メイキング映像' }, TypeD: { CD: '「君と私の歌」/My Voice Is For You/「君と僕の歌」(≠ME)' }, YtLink: 'https://www.youtube.com/embed/iEYwHScdJFQ' },
{ Name: 'ズルいよ ズルいね', Category: 's06', AllType: ['TypeA', 'TypeB', 'TypeC', 'TypeD'], TypeA: { CD: 'Sweetest girl', DVD: 'ズルいよ ズルいね Music Video/ズルいよ ズルいね メイキング映像' }, TypeB: { CD: '推しのいる世界', DVD: '=LOVE×≠ME大運動会' }, TypeC: { CD: '「君の音だったんだ」(≠ME)', DVD: '「君の音だったんだ」 Music Video/「君の音だったんだ」 メイキング映像' }, TypeD: { CD: 'Sweetest girl/推しのいる世界/「君の音だったんだ」(≠ME)' }, YtLink: 'https://www.youtube.com/embed/J5eTB_0SEeg' },
{ Name: '探せ ダイヤモンドリリー', Category: 's05', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { CD: 'いらない ツインテール', DVD: '探せ ダイヤモンドリリー Music Video/Making of 探せ ダイヤモンドリリー ～探せ!! イコラブ探検隊～' }, TypeB: { CD: '虹の素', DVD: 'イコラブ社員旅行2019  ～三浦半島・鎌倉篇～' }, TypeC: { CD: 'いらない ツインテール/虹の素' }, YtLink: 'https://www.youtube.com/embed/t5r0rNwjXQU' },
{ Name: 'Want you! Want you!', Category: 's04', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { CD: '今、この船に乗れ！', DVD: 'Want you! Want you! Music Video/Want you! Want you! メイキング映像' }, TypeB: { CD: 'アイカツハッピーエンド', DVD: 'イコラブ おフランス旅行記' }, TypeC: { CD: '今、この船に乗れ！/アイカツハッピーエンド' }, YtLink: 'https://www.youtube.com/embed/Bot92Nn-ozk' },
{ Name: '手遅れcaution', Category: 's03', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { CD: '「部活中に目が合うなって思ってたんだ」', DVD: '手遅れcaution Music Video/手遅れcaution メイキング映像' }, TypeB: { CD: '樹愛羅、助けに来たぞ', DVD: '『Documentary of =LOVE』総集編' }, TypeC: { CD: '「部活中に目が合うなって思ってたんだ」/樹愛羅、助けに来たぞ' }, YtLink: 'https://www.youtube.com/embed/w0N0TiOlAY0' },
{ Name: '僕らの制服クリスマス', Category: 's02', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { CD: 'ようこそ！イコラブ沼<', DVD: '僕らの制服クリスマス Music Video/僕らの制服クリスマス メイキング映像' }, TypeB: { CD: '届いてLOVE YOU♡', DVD: '届いてLOVE YOU♡/届いてLOVE YOU♡メイキング映像' }, TypeC: { CD: 'ようこそ！イコラブ沼/届いてLOVE YOU♡<' }, YtLink: 'https://www.youtube.com/embed/YIjPbF-dKQA' },
{ Name: '=LOVE', Category: 's01', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { CD: '記憶のどこかで', DVD: ':=LOVE Music Video' }, TypeB: { CD: 'スタート！', DVD: '=LOVE メイキング映像' }, TypeC: { CD: '記憶のどこかで/スタート！' }, YtLink: 'https://www.youtube.com/embed/xOAaBsPaPpY' }
]
let meSingleList = [{ Name: '天使は何処へ', Category: 's06', AllType: ['TypeA', 'TypeB', 'TypeC', 'ノイミー盤'], TypeA: { CD: 'このままでモーメンタリ', DVD: '天使は何処へ Music Video/天使は何処へ メイキング映像' }, TypeB: { CD: 'マシュマロフロート', DVD: '特典映像「ノイミー学園～ヒット祈願！消えたロゴを取り戻せ！～」' }, TypeC: { CD: '今日も君の夢を見たんだ(≒JOY)', DVD: '今日も君の夢を見たんだ Music Video/今日も君の夢を見たんだ メイキング映像' }, ノイミー盤: { CD: '2時半ろけんろー' }, YtLink: 'https://www.youtube.com/embed/PQb1ZMMV1h0' },
{ Name: 'はにかみショート', Category: 's05', AllType: ['TypeA', 'TypeB', 'TypeC', 'ノイミー盤'], TypeA: { CD: '桃色デイブレイク', DVD: '「はにかみショート」Music Video/「はにかみショート」メイキング映像' }, TypeB: { CD: 'ピオニーズ', DVD: '特典映像 「ノイミー学園  初めての海外旅行記 in ヒューストン」' }, TypeC: { CD: '超孤独ライオン(≒JOY)', DVD: '「超孤独ライオン」Music Video/「超孤独ライオン」メイキング映像' }, ノイミー盤: { CD: 'ウルトラレアキッス' }, YtLink: 'https://www.youtube.com/embed/JXchs8DEDWk' },
{ Name: 'す、好きじゃない!', Category: 's04', AllType: ['TypeA', 'TypeB', 'アニメジャケット盤', 'ノイミー盤'], TypeA: { CD: '僕たちのイマージュ', DVD: '「す、好きじゃない!」Music Video/「す、好きじゃない！」メイキング映像' }, TypeB: { CD: 'サマーチョコレート', DVD: '特典映像『ノイミー学園 初夏の遠足〜みんなでクルクルかき氷〜』' }, アニメジャケット盤: { CD: 'こちらハッピー探検隊' }, ノイミー盤: { CD: 'こちらハッピー探検隊' }, YtLink: 'https://www.youtube.com/embed/D4OAx2ALK34' },
{ Name: 'チョコレートメランコリー', Category: 's03', AllType: ['TypeA', 'TypeB', 'ノイミー盤'], TypeA: { CD: '君はスパークル', DVD: '「チョコレートメランコリー」Music Video/チョコレートメランコリー メイキング映像' }, TypeB: { CD: '虹が架かる瞬間', DVD: '特典映像「ノイミー学園〜冬の修学旅行編〜」' }, ノイミー盤: { CD: '#おふしょるにっと' }, YtLink: 'https://www.youtube.com/embed/rDVWtyXTuoU' },
{ Name: 'まほろばアスタリスク', Category: 's02', AllType: ['TypeA', 'TypeB', 'ノイミー盤'], TypeA: { CD: '好きだ！！！', DVD: 'まほろばアスタリスク Music Video/Music Videoメイキング映像' }, TypeB: { CD: 'ワタシアクセント', DVD: '特典映像 「ノイミー学園〜秋のアイドル体⼒測定編〜」' }, ノイミー盤: { CD: '誰もいない森の奥で⼀本の⽊が倒れたら⾳はするか？' }, YtLink: 'https://www.youtube.com/embed/WHjHo0qFXm8' },
{ Name: '君はこの夏、恋をする', Category: 's01', AllType: ['TypeA', 'TypeB', 'ノイミー盤'], TypeA: { CD: 'ミラクル！', DVD: '君はこの夏、恋をするMusic Video/君はこの夏、恋をする メイキング映像' }, TypeB: { CD: '薄明光線', DVD: '特典映像「ノイミー校外学習〜林間学校お泊まり編〜」' }, ノイミー盤: { CD: '超絶ヒロイン' }, YtLink: 'https://www.youtube.com/embed/Y6uOJ_jw6cQ' }
]
let joySingleList = [{ Name: '今日も君の夢を見たんだ', Category: 's04', AllType: ['TypeC'], TypeC: { CD: '天使は何処へ', DVD: '今日も君の夢を見たんだ Music Video/今日も君の夢を見たんだ メイキング映像' }, YtLink: 'https://www.youtube.com/embed/2ltZx6FkU4w' },
{ Name: 'スイートシックスティーン', Category: 's03', AllType: ['TypeD'], TypeD: { CD: 'この空がトリガー', DVD: 'スイートシックスティーン Music Video/スイートシックスティーン メイキング映像' }, YtLink: 'https://www.youtube.com/embed/GuvkL9Gz9P0' },
{ Name: '超孤独ライオン', Category: 's02', AllType: ['TypeC'], TypeC: { CD: 'はにかみショート', DVD: '「超孤独ライオン」Music Video/「超孤独ライオン」メイキング映像' }, YtLink: 'https://www.youtube.com/embed/Ry9UCc9H3nw' },
{ Name: '笑って フラジール', Category: 's01', AllType: ['TypeD'], TypeD: { CD: 'Be Selfish', DVD: '笑って フラジール Music Video/笑って フラジール メイキング映像' }, YtLink: 'https://www.youtube.com/embed/YCbV-2dCyiM' }
]

// 專輯
let loveAlbumList = [{ Name: '過去最上キュン', Category: 'mv', AllType: ['完全生産限定盤', '通常盤[Blu-ray]', '通常盤[DVD 2枚組]'], 完全生産限定盤: { BD: 'Music Video(50首)/Music Videoメイキング映像(13集)/1stAlbum、9thSingle~12thSingle收錄的特典映像' }, '通常盤[Blu-ray]': { BD: 'Music Video(50首)' }, '通常盤[DVD 2枚組]': { DVD: 'Music Video(50首)' } },
{ Name: '全部、内緒。', Category: 'album', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { CD: '桜の咲く音がした 探せ ダイヤモンドリリー Oh!Darling 青春”サブリミナル” セノビーインラブ CAMEO 手遅れcaution ズルいよ ズルいね 現役アイドルちゅ～ 24/7 お姉さんじゃダメですか？ Want you!Want you! cinema 僕らの制服クリスマス =LOVE', BD: 'Music Video集(1st~8th+桜の咲く音がした)' }, TypeB: { CD: '桜の咲く音がした 探せ ダイヤモンドリリー Oh!Darling 青春”サブリミナル” セノビーインラブ CAMEO 手遅れcaution ズルいよ ズルいね 拝啓 貴方様 24/7 お姉さんじゃダメですか？ Want you!Want you! cinema 僕らの制服クリスマス =LOVE', BD: 'イコラブ初体験チャレンジ ～何をやるかは全部、内緒。～/桜の咲く音がした メイキング' }, TypeC: { CD: '桜の咲く音がした 探せ ダイヤモンドリリー Oh!Darling 青春”サブリミナル” セノビーインラブ CAMEO 手遅れcaution ズルいよ ズルいね 24/7 お姉さんじゃダメですか？ Want you!Want you! cinema 僕らの制服クリスマス =LOVE' } }
]
let meAlbumList = [{ Name: '超特急 ≠ME行き', Category: 'album', AllType: ['初回限定盤', '通常盤', 'ノイミー盤'], 初回限定盤: { CD: '「君の音だったんだ」 「君と僕の歌」 クルクルかき氷 空白の花 P.I.C. 自分賛歌 秘密インシデント ≠ME', DVD: '「秘密インシデント」 Music Video/特典映像「≠MEの秘密デート」' }, 通常盤: { CD: '「君の音だったんだ」 「君と僕の歌」 クルクルかき氷 空白の花 P.I.C. ポニーテール キュルン 秘密インシデント ≠ME' }, ノイミー盤: { CD: '「君の音だったんだ」 「君と僕の歌」 クルクルかき氷 空白の花 P.I.C. てゆーか、みるてんって何？ 秘密インシデント ≠ME' } }
]
let joyAlbumList = []

// 演唱會
let loveConList = [{ Name: '=LOVE ～齊藤なぎさ卒業コンサート～ 現役アイドルちゅ～ みんなのこと大好きだよ♡', Category: 'conNagisa', AllType: ['TypeA', 'TypeB'], TypeA: { BD: '=LOVE ~齊藤なぎさ卒業コンサート~  現役アイドルちゅ~ みんなのこと大好きだよ♡', CD: '君だけの花道' }, TypeB: { DVD: '=LOVE ~齊藤なぎさ卒業コンサート~  現役アイドルちゅ~ みんなのこと大好きだよ♡' } },
{ Name: '=LOVE 全国ツアー2022 「どう考えても、君ってイコラブのこと好きじゃん」', Category: 'conTsuaa2022', AllType: ['TypeA', 'TypeB'], TypeA: { BD: '2022年4月30日 =LOVE全国ツアー2022 「どう考えても、君ってイコラブのこと好きじゃん」 / メイキング' }, TypeB: { DVD: '2022年4月30日 =LOVE全国ツアー2022 「どう考えても、君ってイコラブのこと好きじゃん」 / メイキング' } },
{ Name: '=LOVE 全国ツアー「全部、内緒。」～横浜アリーナ～', Category: 'conTsuaa2021', AllType: ['TypeA', 'TypeB'], TypeA: { BD: '2021年7月7日 =LOVE 全国ツアー「全部、内緒。」~横浜アリーナ~ / メイキング' }, TypeB: { DVD: '2021年7月7日 =LOVE 全国ツアー「全部、内緒。」~横浜アリーナ~ / メイキング' } },
{ Name: 'You all are "My ideal"～日本武道館～', Category: 'conTsuaa2020', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { BD_1: '2021年1月17日 You all are "My ideal" 日本武道館 / メイキング', BD_2: '2020年11月27日 You all are "My ideal" TOKYO DOME CITY HALL / メイキング' }, TypeB: { BD: '2021年1月17日 You all are "My ideal" 日本武道館 / メイキング' }, TypeC: { DVD: '2021年1月17日 You all are "My ideal" 日本武道館 / メイキング' } },
{ Name: '=LOVE 4th ANNIVERSARY PREMIUM CONCERT', Category: 'con4', AllType: ['TypeA', 'TypeB'], TypeA: { BD: '2021年9月20日 =LOVE 4th ANNIVERSARY PREMIUM CONCERT / メイキング' }, TypeB: { DVD: '2021年9月20日 =LOVE 4th ANNIVERSARY PREMIUM CONCERT / メイキング' } },
{ Name: '=LOVE 3rd ANNIVERSARY PREMIUM CONCERT', Category: 'con3', AllType: ['Blu-ray', 'DVD'], 'Blu-ray': { BD: '2020年9月6日 =LOVE 3rd ANNIVERSARY PREMIUM CONCERT / メイキング' }, DVD: { DVD: '2020年9月6日 =LOVE 3rd ANNIVERSARY PREMIUM CONCERT / メイキング' } },
{ Name: '=LOVE デビュー2周年記念コンサート', Category: 'con2', AllType: ['Blu-ray', 'DVD'], 'Blu-ray': { BD: '2019年9月12日 =LOVE デビュー2周年記念コンサート / メイキング / 「866」Music Video' }, DVD: { DVD: '2019年9月12日 =LOVE デビュー2周年記念コンサート / メイキング / 「866」Music Video' } },
{ Name: '=LOVE 1stコンサート「初めまして、=LOVEです。」', Category: 'con1', AllType: ['Blu-ray', 'DVD'], 'Blu-ray': { BD: '2019年2月16日 初めまして、=LOVEです。 / メイキング / 「スタート！」Music Video' }, DVD: { DVD: '2019年2月16日 初めまして、=LOVEです。 / メイキング / 「スタート！」Music Video' } }
]
let meConList = [{ Name: '≠ME 3rd ANNIVERSARY PREMIUM CONCERT', Category: 'con3', AllType: ['Blu-ray', 'DVD'], 'Blu-ray': { BD: '2022年2月23日 ≠ME 3rd ANNIVERSARY PREMIUM CONCERT / メイキング映像' }, DVD: { DVD: '2022年2月23日 ≠ME 3rd ANNIVERSARY PREMIUM CONCERT / メイキング映像' } },
{ Name: '≠ME 1stコンサート〜初めまして、≠MEです。〜', Category: 'con1', AllType: ['Blu-ray', 'DVD'], 'Blu-ray': { BD: '2021年6月1-2日 ≠ME 1stコンサート~初めまして、≠MEです。~' }, DVD: { DVD: '2021年6月1-2日 ≠ME 1stコンサート~初めまして、≠MEです。~' } }
]
let joyConList = []

// 合同演唱會
let specialConList = [{ Name: 'イコノイフェス 2021', Category: 'con2021', AllType: ['TypeA', 'TypeB', 'TypeC'], TypeA: { BD: '2021年10月9日 イコノイフェス2021<昼公演> / 2021年10月9日 イコノイフェス2021<夜公演> / イコノイフェス2021 メイキング' }, TypeB: { BD: '2021年10月9日 イコノイフェス2021<夜公演>' }, TypeC: { DVD: '2021年10月9日 イコノイフェス2021<夜公演>' } },
{ Name: '=LOVE、≠ME スペシャルコンサート「24girls 2020」', Category: 'con2020', AllType: ['TypeA', 'TypeB'], TypeA: { BD: '2020年10月24日 =LOVE、≠ME スペシャルコンサート『24girls 2020』 / 「24girls」日比谷野外大音楽堂 メイキング / ライブダイジェスト' }, TypeB: { DVD: '2020年10月24日 =LOVE、≠ME スペシャルコンサート『24girls 2020』 / =LOVE、≠ME スペシャルコンサート 『24girls 2020』メイキング' } }
]


// 插入內容function==================================================
function member(locate, list) {
    let fig = document.createElement('figure');
    let figcap = document.createElement('figcaption');

    figcap.innerHTML = `<span>${list.Name}</span><span>愛稱：</span><span>${list.Aisyou}</span><br>
        生日：${list.Birthday}<br>
        出生地：<span>${list.Birthplace}</span><br>
        <span>血型：${list.Blood}</span><br>
        <span>興趣：${list.Interest}</span>`;

    fig.setAttribute('id', 'memberFig');

    locate.appendChild(fig);
    fig.appendChild(figcap);

}
function music(locate, list, group) {
    for (let value of list) {
        let fig = document.createElement('figure');
        let imgBox = document.createElement('div');
        let musicImg = document.createElement('img');
        let ytImg = document.createElement('img');
        let figcap = document.createElement('figcaption');

        imgBox.classList.add('imgbox')
        musicImg.classList.add('collapseTrigger')
        musicImg.src = `./image/${group}_${value.Category}.jpg`;
        ytImg.src = './image/youtube.png';
        musicImg.alt = '封面';
        figcap.innerText = value.Name;

        locate.appendChild(fig);
        fig.appendChild(imgBox);
        imgBox.appendChild(musicImg);
        while (list[0].Category.indexOf('s') == 0) {
            imgBox.appendChild(ytImg);
            break;
        }
        fig.appendChild(figcap);
    }
}
function musicIntro(locate, list, group) {
    for (let value of list) {
        let introBox = document.createElement('div');
        let introText = '';

        for (let value2 of value.AllType) {
            introText += `<h5>${value2}</h5>`
            while (value[value2].CD != undefined) {
                introText += `<p class="musicintro_words_4">CD: ${value[value2].CD}</p>`;
                break
            }
            while (value[value2].DVD != undefined) {
                introText += `<p class="musicintro_words_5">DVD: ${value[value2].DVD}</p>`;
                break
            }
            while (value[value2].BD != undefined) {
                introText += `<p class="musicintro_words_4">BD: ${value[value2].BD}</p>`;
                break
            }
            while (value[value2].BD_1 != undefined) {
                introText += `<p class="musicintro_words_6">BD-1: ${value[value2].BD_1}</p>`;
                break
            }
            while (value[value2].BD_2 != undefined) {
                introText += `<p class="musicintro_words_6">BD-2: ${value[value2].BD_2}</p>`;
                break
            }
        }

        introBox.classList.add('musicintro');
        introBox.setAttribute('id', `${group}_${value.Category}_inf`);
        introBox.innerHTML = introText;
        locate.appendChild(introBox);
    }
}

// 成員內容==================================================
let memberMap = document.querySelectorAll('.memberMap')

let memberCount = 0;
for (let memberMapItems of memberMap) {
    memberMapItems.addEventListener('click', function () {
        if (memberCount == 1) {
            memberFig.remove();
            memberCount = 0;
        }

        while (memberMapItems.parentElement.name.includes('love') && innerWidth > 768) {
            let y = loveMemberList.find(x => x.Img === memberMapItems.title);
            member(loveMember, y);
            memberFig.style.background = `linear-gradient(110deg, transparent 30%, #ea6c81 33%) center, linear-gradient(70deg, transparent 30%, #ea6c81 33%) center, url(./image/love_${y.Img}.jpg) no-repeat left top / 30% auto`;
            memberFig.style.boxShadow = 'inset 0 0 20px 5px #ea6c81';
            memberCount = 1;
            break;
        }
        while (memberMapItems.parentElement.name.includes('love') && innerWidth <= 768) {
            let y = loveMemberList.find(x => x.Img === memberMapItems.title);
            member(loveMember, y);
            memberFig.style.background = `linear-gradient(200deg, transparent 50%, #ea6c81 53%) center, linear-gradient(160deg, transparent 50%, #ea6c81 53%) center, url(./image/love_${y.Img}.jpg) no-repeat center top / 100% 90%`;
            memberFig.style.boxShadow = 'inset 0 0 20px 5px #ea6c81';
            memberCount = 1;
            break;
        }
        while (memberMapItems.parentElement.name.includes('me') && innerWidth > 768) {
            let y = meMemberList.find(x => x.Img === memberMapItems.title);
            member(meMember, y);
            memberFig.style.background = `linear-gradient(110deg, transparent 30%, #79ccbd 33%) center, linear-gradient(70deg, transparent 30%, #79ccbd 33%) center, url(./image/me_${y.Img}.jpg) no-repeat left top / 30% auto`;
            memberFig.style.boxShadow = 'inset 0 0 20px 5px #79ccbd';
            memberCount = 1;
            break;
        }
        while (memberMapItems.parentElement.name.includes('me') && innerWidth <= 768) {
            let y = meMemberList.find(x => x.Img === memberMapItems.title);
            member(meMember, y);
            memberFig.style.background = `linear-gradient(200deg, transparent 50%, #79ccbd 53%) center, linear-gradient(160deg, transparent 50%, #79ccbd 53%) center, url(./image/me_${y.Img}.jpg) no-repeat center top / 100% 90%`;
            memberFig.style.boxShadow = 'inset 0 0 20px 5px #79ccbd';
            memberCount = 1;
            break;
        }
        while (memberMapItems.parentElement.name.includes('joy') && innerWidth > 768) {
            let y = joyMemberList.find(x => x.Img === memberMapItems.title);
            member(joyMember, y);
            memberFig.style.background = `linear-gradient(110deg, transparent 30%, #ffdf6a 33%) center, linear-gradient(70deg, transparent 30%, #ffdf6a 33%) center, url(./image/joy_${y.Img}.jpg) no-repeat left top / 30% auto`;
            memberFig.style.boxShadow = 'inset 0 0 20px 5px #ffdf6a';
            memberCount = 1;
            break;
        }
        while (memberMapItems.parentElement.name.includes('joy') && innerWidth <= 768) {
            let y = joyMemberList.find(x => x.Img === memberMapItems.title);
            member(joyMember, y);
            memberFig.style.background = `linear-gradient(200deg, transparent 50%, #ffdf6a 53%) center, linear-gradient(160deg, transparent 50%, #ffdf6a 53%) center, url(./image/joy_${y.Img}.jpg) no-repeat center top / 100% 90%`;
            memberFig.style.boxShadow = 'inset 0 0 20px 5px #ffdf6a';
            memberCount = 1;
            break;
        }
    });
}

loveMember.addEventListener('mouseleave', function () {
    if (memberCount == 1) {
        memberFig.remove();
        memberCount = 0;
    }
});
loveMember.addEventListener('touchstart', function () {
    if (memberCount == 1) {
        memberFig.remove();
        memberCount = 0;
    }
});

meMember.addEventListener('mouseleave', function () {
    if (memberCount == 1) {
        memberFig.remove();
        memberCount = 0;
    }
});
meMember.addEventListener('touchstart', function () {
    if (memberCount == 1) {
        memberFig.remove();
        memberCount = 0;
    }
});

joyMember.addEventListener('mouseleave', function () {
    if (memberCount == 1) {
        memberFig.remove();
        memberCount = 0;
    }
});
joyMember.addEventListener('touchstart', function () {
    if (memberCount == 1) {
        memberFig.remove();
        memberCount = 0;
    }
});

// 音樂內容==================================================
music(loveSingle, loveSingleList, 'love');
musicIntro(loveSingle, loveSingleList, 'love');
music(meSingle, meSingleList, 'me');
musicIntro(meSingle, meSingleList, 'me');
music(joySingle, joySingleList, 'joy');
musicIntro(joySingle, joySingleList, 'joy');
music(loveAlbum, loveAlbumList, 'love');
musicIntro(loveAlbum, loveAlbumList, 'love');
music(meAlbum, meAlbumList, 'me');
musicIntro(meAlbum, meAlbumList, 'me');
// music(joyAlbum, joyAlbumList, 'joy');
// musicIntro(joyAlbum, joyAlbumList, 'joy');
music(loveConcert, loveConList, 'love');
musicIntro(loveConcert, loveConList, 'love');
music(meConcert, meConList, 'me');
musicIntro(meConcert, meConList, 'me');
// music(joyConcert, joyConList, 'joy');
// musicIntro(joyConcert, joyConList, 'joy');
music(loveSpecialConcert, specialConList, 'ikonoijoi');
musicIntro(loveSpecialConcert, specialConList, 'ikonoijoi');
music(meSpecialConcert, specialConList, 'ikonoijoi');
musicIntro(meSpecialConcert, specialConList, 'ikonoijoi');
// music(joySpecialConcert, specialConList, 'ikonoijoi');
// musicIntro(joySpecialConcert, specialConList, 'ikonoijoi');

// 音樂介紹collapse==================================================
let demo = document.querySelectorAll('.collapseTrigger')
let result = document.querySelectorAll('.musicintro')

let collapseTransition = 350;

demo.forEach(function (value, index) {
    let haResult = Array.from(result);
    let newResult = haResult.slice(0, index).concat(haResult.slice(index + 1));
    let motoHeight = getComputedStyle(result[index]).height;

    result[index].style.height = '0';

    value.addEventListener('click', function () {
        let count = 0;
        for (const mn of newResult) {
            while (mn.classList.contains('collapse')) {
                mn.style.height = '0'
                setTimeout(() => {
                    mn.classList.remove('collapse');
                }, collapseTransition);
                count = 1;
                break
            }
        }
        if (!result[index].classList.contains('collapse') && count == 0) {
            result[index].classList.add('collapse');
            result[index].style.height = motoHeight;
        }
        else if (!result[index].classList.contains('collapse') && count == 1) {
            setTimeout(() => {
                result[index].classList.add('collapse');
                result[index].style.height = motoHeight;
            }, collapseTransition);
        }
        else {
            result[index].style.height = '0'
            setTimeout(() => {
                result[index].classList.remove('collapse');
            }, collapseTransition);
        }
    });
})

// 音樂YT連結==================================================
let ytLInkImg = document.querySelectorAll('img[src*="youtube"]');

function ytLink(linkToGo) {
    ytiframe.src = linkToGo;
    ytcontainer.showModal();
}

for (let i = 0; i < loveSingleList.length; i++) {
    ytLInkImg[i].addEventListener('click', function () { ytLink(loveSingleList[i].YtLink) });
};

for (let i = 0; i < meSingleList.length; i++) {
    ytLInkImg[i + 13].addEventListener('click', function () { ytLink(meSingleList[i].YtLink) });
};

for (let i = 0; i < joySingleList.length; i++) {
    ytLInkImg[i + 19].addEventListener('click', function () { ytLink(joySingleList[i].YtLink) });
};

ytclose.addEventListener('click', () => {
    ytiframe.src = '';
    ytcontainer.close();
});

// 導覽列觸頂變黑==================================================
let mainNav = document.querySelector('.mainNav');
let mainNavOffsetTop = mainNav.offsetTop;

document.addEventListener('scroll', () => {
    mainNav.style.backgroundColor = window.scrollY >= mainNavOffsetTop ? '#000000' : '#000000cc';
});

// 響應式導覽列==================================================
let mainNav_ul = document.querySelector('.mainNav>ul');

document.addEventListener('click', function (e) {
    if (innerWidth <= 768 && !mainNav_ul.contains(e.target)) {
        mainNav_ul.style.display = 'none'
    }
}, true);

icon.addEventListener('click', function () {
    mainNav_ul.style.display = getComputedStyle(mainNav_ul).display == 'none' ? 'grid' : 'none';
});

function mainNavRWD() {
    while (innerWidth > 768) {
        mainNav_ul.style.display = 'grid';
        break;
    }
    while (innerWidth <= 768) {
        mainNav_ul.style.display = 'none';
        break;
    }
}

window.addEventListener('load', mainNavRWD);

window.addEventListener('resize', mainNavRWD);

// 表單==================================================
function getNameByCategoryValue(object, value) {
    let y = object.find(x => x.Category === value);
    return y.Name
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let userName = document.getElementById('userName').value;
    let userPhone = document.getElementById('userPhone').value;
    let userEmail = document.getElementById('userEmail').value;
    let userAddress = document.getElementById('userAddress').value;
    let userGoods = document.getElementById('goods').value;
    let userGoodsName = '';
    let userPath = document.getElementById('path').value;
    let userType = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    let userNeed = document.querySelector('input[type="radio"]:checked').id;
    let userNeedFinall = ''
    let userWords = document.getElementById('userWords').value;

    if (userGoods.includes('love')) {
        if (userGoods.slice(5).indexOf('s') == 0) {
            userGoodsName = getNameByCategoryValue(loveSingleList, userGoods.slice(5));
        } else if (userGoods.slice(5).indexOf('c') == 0) {
            userGoodsName = getNameByCategoryValue(loveConList, userGoods.slice(5));
        } else {
            userGoodsName = getNameByCategoryValue(loveAlbumList, userGoods.slice(5));
        }
    } else if (userGoods.includes('me')) {
        if (userGoods.slice(3).indexOf('s') == 0) {
            userGoodsName = getNameByCategoryValue(meSingleList, userGoods.slice(3));
        } else if (userGoods.slice(3).indexOf('c') == 0) {
            userGoodsName = getNameByCategoryValue(meConList, userGoods.slice(3));
        } else {
            userGoodsName = getNameByCategoryValue(meAlbumList, userGoods.slice(3));
        }
    } else if (userGoods.includes('joy')) {
        if (userGoods.slice(4).indexOf('s') == 0) {
            userGoodsName = getNameByCategoryValue(joySingleList, userGoods.slice(4));
        } else if (userGoods.slice(4).indexOf('c') == 0) {
            userGoodsName = getNameByCategoryValue(joyConList, userGoods.slice(4));
        } else {
            userGoodsName = getNameByCategoryValue(joyAlbumList, userGoods.slice(4));
        }
    } else {
        userGoodsName = getNameByCategoryValue(specialConList, userGoods);
    }

    let userTypeList = [];
    for (let items of userType) {
        if (items.id == 'typeOther') {
            userTypeList.push('其他');
        }
        else {
            userTypeList.push(items.id.charAt(0).toUpperCase() + items.id.slice(1));
        }
    }

    userNeedFinall = userNeed == 'yesspecial' ? '附特典' : '';

    let UIS_div = document.querySelector('#userInputShow>div>div')
    UIS_div.innerHTML = `<p>姓名：${userName}</p>
    <p>電話：${userPhone}</p>
    <p>電子郵件：${userEmail}</p>
    <p>地址：${userAddress}</p>
    <p>商品：${userGoodsName}</p>
    <p>通路：${userPath}</p>
    <p>形態：${userTypeList.join(' & ')} ${userNeedFinall}</p>
    <p>備註：${userWords}</p>`;
    userInputShow.style.opacity = '0';
    userInputShow.style.transform = 'translateY(-50px)';
    setTimeout(() => {
        userInputShow.style.opacity = '';
        userInputShow.style.transform = '';
    }, 1);

    userInputShow.showModal();
});

dialogSubmit.addEventListener('click', function () {
    userInputShow.close();
    // resetBtn.click();
});

// 隨機圖片
function getRandom(min, max, point = 0) {
    if (typeof min != 'number' || typeof max != 'number') {
        console.error('Need a number.');
    } else {
        return point == 0 ? Math.floor(Math.random() * (max - min + 1)) + min
            : Number(Math.floor(Math.random() * (max - min)) + min + Math.random().toFixed(point).substr(1));
    }
}

let randomImg = document.querySelectorAll('.randomImg');

function noRepeatRandom(amount) {
    let arr = [];
    for (let i = 0; i < amount; i++) {  
        let temp = getRandom(1, 10);
        while (arr.includes(temp)) {
            temp = getRandom(1, 10);
        }
        arr.push(temp);
    };
    return arr;
}

submitBtn.addEventListener('click', function () {
    let ran = noRepeatRandom(5);
    for (let i = 0; i < 5; i++) {
        randomImg[i].src = `./image/random${ran[i]}.jpg`;
        randomImg[i].style.left = i == 4 ? `${getRandom(25, 65)}%`
            : i % 2 == 0 ? `${getRandom(0, 15)}%` : `${getRandom(75, 90)}%`;
        randomImg[i].style.top = `${getRandom(0, 90)}%`;
        randomImg[i].style.transform = getRandom(1, 2) == 1 ? `rotateZ(${getRandom(0, 20)}deg)` : `rotateZ(${-1 * getRandom(0, 20)}deg)`;
    }
});