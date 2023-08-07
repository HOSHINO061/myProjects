-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-07-24 09:13:20
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `fleur`
--
DROP DATABASE `fleur`;

CREATE DATABASE IF NOT EXISTS `fleur` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fleur`;

-- --------------------------------------------------------

--
-- 資料表結構 `allcoupon`
--

CREATE TABLE `allcoupon` (
  `couponId` varchar(16) NOT NULL,
  `description` varchar(151) NOT NULL,
  `useLimit` int(11) NOT NULL,
  `conponTimeLimit` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `allcoupon`
--

INSERT INTO `allcoupon` (`couponId`, `description`, `useLimit`, `conponTimeLimit`) VALUES
('pp95t230831', '95%', 1000, '2023-06-29 10:28:38'),
('pt200t230715', '-200', 1500, '2023-07-24 06:48:21'),
('pt80t230715', '-80', 1000, '2023-06-29 10:29:03');

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `cartfororder`
-- (請參考以下實際畫面)
--
CREATE TABLE `cartfororder` (
`uid` varchar(31)
,`pid` varchar(7)
,`pName` varchar(151)
,`price` int(11)
,`pImage` varchar(301)
,`quantity` int(11)
,`total` bigint(21)
,`pState` varchar(11)
,`text` varchar(196)
);

-- --------------------------------------------------------

--
-- 資料表結構 `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `uid` varchar(31) NOT NULL,
  `orderNo` varchar(31) NOT NULL,
  `total` int(11) NOT NULL,
  `useCoupon` varchar(16) DEFAULT NULL,
  `payWay` varchar(40) NOT NULL,
  `orderName` varchar(151) NOT NULL,
  `orderPhone` varchar(16) NOT NULL,
  `orderAddress` varchar(151) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `history`
--

INSERT INTO `history` (`id`, `uid`, `orderNo`, `total`, `useCoupon`, `payWay`, `orderName`, `orderPhone`, `orderAddress`, `time`) VALUES
(1, 'mfee1804', 'SP192622', 2030, '', '貨到付款', '陳柏勲', '0915312591', '台中市神岡區豐洲路1111號', '2023-07-24 07:02:56'),
(2, 'nina123', 'SP135972', 281, 'pp95t230831', '貨到付款', 'Nina', '0951753852', '台中市南屯區公益路二段51號', '2023-07-24 07:03:27');

-- --------------------------------------------------------

--
-- 資料表結構 `historydetails`
--

CREATE TABLE `historydetails` (
  `orderNo` varchar(31) NOT NULL,
  `pid` varchar(7) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unitPriceWhenBought` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `historydetails`
--

INSERT INTO `historydetails` (`orderNo`, `pid`, `quantity`, `unitPriceWhenBought`) VALUES
('SP135972', '000001', 3, 55),
('SP135972', '000002', 5, 20),
('SP135972', '000010', 3, 20),
('SP192622', '000001', 10, 50),
('SP192622', '000003', 50, 30);

-- --------------------------------------------------------

--
-- 資料表結構 `likelist`
--

CREATE TABLE `likelist` (
  `uid` varchar(31) NOT NULL,
  `pid` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `likelist`
--

INSERT INTO `likelist` (`uid`, `pid`) VALUES
('mfee1804', '000001'),
('mfee1804', '000003'),
('mfee1804', '000010');

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `orderdetails`
-- (請參考以下實際畫面)
--
CREATE TABLE `orderdetails` (
`uid` varchar(31)
,`orderNo` varchar(31)
,`pid` varchar(7)
,`pName` varchar(151)
,`pImage` varchar(301)
,`quantity` int(11)
,`subtotal` bigint(21)
,`useCoupon` varchar(16)
,`total` int(11)
,`time` timestamp
,`payWay` varchar(40)
,`orderName` varchar(151)
,`orderPhone` varchar(16)
,`orderAddress` varchar(151)
,`text` varchar(196)
);

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `pid` varchar(7) NOT NULL,
  `pName` varchar(151) NOT NULL,
  `pImage` varchar(301) NOT NULL,
  `unitPrice` int(11) NOT NULL,
  `inventory` int(11) NOT NULL,
  `category` varchar(31) NOT NULL,
  `meaning` varchar(151) NOT NULL,
  `key1` varchar(31) NOT NULL,
  `key2` varchar(31) NOT NULL,
  `key3` varchar(31) NOT NULL,
  `soldState` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`pid`, `pName`, `pImage`, `unitPrice`, `inventory`, `category`, `meaning`, `key1`, `key2`, `key3`, `soldState`) VALUES
('000001', '粉貝殼花', '粉貝殼花.jpg', 50, 100, '', '唯一的愛', '', '', '', 'on'),
('000002', '南非雛菊', '南非雛菊.jpg', 80, 100, '菊花', '沉默不語', '氣氣氣', '綠帽的感覺', '憂鬱星期一', 'on'),
('000003', '山荷葉', '山荷葉.jpg', 30, 59, '荷葉', '親情', '', '', '', 'on'),
('000004', '狹葉薰衣草', '狹葉薰衣草.jpg', 65, 80, '薰衣草', '平靜、優雅', '想要平靜', '下午茶時光', '', 'on'),
('000005', '妃色玫瑰', '妃色玫瑰.jpg', 80, 30, '玫瑰', '容光煥發', '', '', '', 'on'),
('000006', '黛安娜玫瑰', '黛安娜玫瑰.jpg', 95, 30, '玫瑰', '愛上你是我今生最大的幸福', '浪漫時刻', '滿足', '', 'on'),
('000007', '紅薔薇', '紅薔薇.jpg', 45, 80, '薔薇', '熱戀', '開心', '', '', 'on'),
('000008', '珊瑚粉玫瑰', '珊瑚粉玫瑰.jpg', 68, 90, '玫瑰', '輕柔的愛', '', '', '', 'on'),
('000009', '宿根滿天星', '宿根滿天星.jpg', 35, 50, '', '純粹的愛', '一點小害羞', '', '', 'on'),
('000010', '小束鬱金香', '小束鬱金香.jpg', 63, 60, '鬱金香', '愛的告白', '', '', '', 'on'),
('000011', '綠枝花材', '綠枝花材.jpg', 25, 88, '', '綠意盎然', '', '', '', 'on'),
('000012', '進口洋荷花', '進口洋荷花.jpg', 49, 33, '荷花', '堅貞、純潔', '', '', '', 'on'),
('000013', '香檳玫瑰花束', '香檳玫瑰花束.jpg', 105, 99, '玫瑰', '只對你鐘情', '燭光晚餐', '', '', 'on'),
('000014', '香芋玫瑰', '香芋玫瑰.jpg', 56, 123, '玫瑰', '一見鍾情、迷戀', '', '', '', 'on'),
('000015', '珠光粉玫瑰', '珠光粉玫瑰.jpg', 67, 94, '玫瑰', '喜歡你燦爛的笑容', '', '', '', 'on'),
('000016', '淺紫鳶尾', '淺紫鳶尾.jpg', 66, 50, '鳶尾', '吉祥', '', '加薪', '小人退散', 'on'),
('000017', '玫瑰花籃', '玫瑰花籃.jpg', 150, 80, '玫瑰', '祝福', '', '', '', 'on'),
('000018', '洋桔梗花束', '洋桔梗花束.jpg', 60, 99, '', '不變的愛', '', '', '', 'on'),
('000019', '白玫瑰', '白玫瑰.jpg', 50, 80, '玫瑰', '純粹美好', '加薪', '', '滿足', 'on'),
('000020', '禮物花束', '禮物花束.jpg', 150, 35, '', '祝福', '', '', '', 'on'),
('000021', '橙橘玫瑰', '橙橘玫瑰.jpg', 69, 80, '玫瑰', '信賴、羈絆', '下午茶時光', '', '', 'on'),
('000022', '乾燥花材', '乾燥花材.jpg', 30, 99, '', '清爽', '', '', '', 'on'),
('000023', '白鈴蘭', '白鈴蘭.jpg', 75, 90, '蘭花', '幸福的再度來訪', '滿足', '', '加薪', 'on'),
('000024', '櫻桃玫瑰', '櫻桃玫瑰.jpg', 85, 50, '玫瑰', '浪漫甜蜜', '', '', '', 'on'),
('000025', '矢車菊', '矢車菊.jpg', 1, 0, '菊花', '美好', '', '', '', 'on'),
('000026', '波斯菊', '波斯菊.jpg', 1, 0, '菊花', '永遠快樂、堅強不屈、純真', '開心', '踢到桌腳', '想躺平', 'on'),
('000027', '洋甘菊', '洋甘菊.jpg', 1, 0, '菊花', '逆境中的力量', '被上司罵', '踢到桌腳', '想躺平', 'on'),
('000028', '苦棟花', '苦棟花.jpg', 1, 0, '', '苦澀的回憶', '', '', '', 'on'),
('000029', '棉花', '棉花.jpg', 1, 0, '', '珍惜眼前的人與幸福', '遇到神隊友', '', '', 'on'),
('000030', '風鈴草', '風鈴草.jpg', 1, 0, '', '感謝', '遇到神隊友', '', '', 'on'),
('000031', '紫菊花', '紫菊花.jpg', 1, 0, '菊花', '惱恨、憤怒', '氣氣氣', '', '', 'on'),
('000032', '芍藥', '芍藥.jpg', 1, 0, '', '害羞', '一點小害羞', '', '', 'on'),
('000033', '丁香', '丁香.jpg', 1, 0, '', '初戀', '一點小害羞', '', '', 'on'),
('000034', '睡蓮', '睡蓮.jpg', 1, 0, '', '純潔、純真', '想要平靜', '', '', 'on'),
('000035', '銀蓮花', '銀蓮花.jpeg', 1, 0, '', '失去希望', '失眠的夜晚', '', '', 'on'),
('000036', '非洲菊', '非洲菊.jpg', 1, 0, '菊花', '神秘、興奮', '安靜離職中', '', '', 'on'),
('000037', '薰衣草', '薰衣草.jpg', 1, 0, '薰衣草', '不信任、等待愛情', '失眠的夜晚', '', '', 'on'),
('000038', '蒔蘿', '蒔蘿.jpg', 1, 0, '', '平靜', '想要平靜', '', '', 'on'),
('000039', '紫大麗花', '紫大麗花.jpg', 1, 0, '', '勇氣、毅力', '尋求刺激', '', '', 'on'),
('000040', '粉大麗花', '粉大麗花.jpg', 1, 0, '', '生命力、幻想', '尋求刺激', '', '', 'on'),
('000041', '鳳仙花', '鳳仙花.jpg', 1, 0, '', '不耐煩', '踢到桌腳', '', '', 'on'),
('000042', '牡丹花', '牡丹花.jpg', 1, 0, '', '富貴繁榮', '中大獎', '', '', 'on'),
('000043', '蘭花', '蘭花.jpg', 1, 0, '蘭花', '幸運、財富', '中大獎', '', '', 'on'),
('000044', '瓜葉菊', '瓜葉菊.jpg', 1, 0, '菊花', '快樂', '', '', '', 'on'),
('000045', '吊蘭', '吊蘭.jpg', 1, 0, '', '樸實、天真、希望', '', '', '', 'on'),
('000046', '仙人掌', '仙人掌.jpg', 1, 0, '', '堅強', '小人退散', '', '', 'on'),
('000047', '荷花', '荷花.jpg', 1, 0, '', '清白、孤傲', '', '', '', 'on'),
('000048', '野薑花', '野薑花.jpg', 1, 0, '', '熱情、力量', '想去旅行', '', '', 'on'),
('000049', '梨花', '梨花.jpg', 1, 0, '', '青春活力', '想去旅行', '', '', 'on'),
('000050', '雞蛋花', '雞蛋花.jpg', 1, 0, '', '簡單平凡的幸福', '想躺平', '', '', 'on'),
('000051', '天竺葵', '天竺葵.jpg', 1, 0, '', '幸福在身邊', '浪漫時刻', '', '', 'on'),
('000052', '紫羅蘭', '紫羅蘭.jpg', 1, 0, '', '愛的羈絆', '浪漫時刻', '', '', 'on'),
('000053', '火鶴花', '火鶴花.jpg', 1, 0, '', '燃燒的心、熱情', '燭光晚餐', '', '', 'on'),
('000054', '蕎麥花', '蕎麥花.jpg', 1, 0, '', '戀人、愛的承諾', '燭光晚餐', '', '', 'on'),
('000055', '苜蓿花', '苜蓿花.png', 1, 0, '', '夢想成真', '', '', '', 'on'),
('000056', '三色堇', '三色堇.jpg', 1, 0, '', '憂喜參半', '憂鬱星期一', '安靜離職中', '', 'on'),
('000057', '藍雪花', '藍雪花.jpg\r\n', 1, 0, '', '冷淡', '憂鬱星期一', '', '', 'on'),
('000058', '金合歡', '金合歡.jpg', 1, 0, '', '友情', '久違的聚會', '', '', 'on'),
('000059', '黃色鳶尾', '黃色鳶尾.jpg', 1, 0, '鳶尾', '熱情開朗的友情', '久違的聚會', '', '', 'on'),
('000060', '紅色繡球花', '紅色繡球花.jpg', 1, 0, '', '喜慶、熱烈團聚', '久違的聚會', '', '', 'on'),
('000061', '雪割草', '雪割草.jpg', 1, 0, '', '忍耐', '氣氣氣', '遇到豬隊友', '有苦難言', 'on'),
('000062', '溪蓀', '溪蓀.jpg', 1, 0, '', '憤怒', '', '', '', 'on'),
('000063', '百合', '百合.jpg', 100, 0, '百合', '順利、心想事成、百年好合', '', '', '', 'on'),
('000064', '黃百合', '黃百合.jpg', 150, 0, '百合', '感激、快樂', '遇到神隊友', '小人退散', '', 'on'),
('000065', '黑百合', '黑百合.jpg', 200, 0, '百合', '詛咒', '遇到豬隊友', '', '', 'on'),
('000066', '魯冰花', '魯冰花.jpg', 1, 0, '', '艱苦、悲哀', '失眠的夜晚', '被上司罵', '有苦難言', 'on'),
('000067', '海芋', '海芋.jpg', 1, 0, '', '青春活力、希望、和平', '有一點開心', '想去旅行', '', 'on'),
('000068', '粉紅薔薇', '粉紅薔薇.jpg', 1, 0, '薔薇', '燦爛的笑容、感動', '有一點開心', '', '', 'on'),
('000069', '風信子', '風信子.jpg', 1, 0, '風信子', '喜悅、重生的愛', '有一點開心', '綠帽的感覺', '', 'on'),
('000070', '球蘭', '球蘭.png', 1, 0, '', '人生起點、美麗的青春', '', '', '', 'on'),
('000071', '藍玫瑰', '藍玫瑰.jpg', 1, 0, '玫瑰', '神秘、創意', '尋求刺激', '中大獎', '', 'on'),
('000072', '紅玫瑰', '紅玫瑰.jpg', 1, 0, '玫瑰', '熱戀', '', '', '', 'on'),
('000073', '橘玫瑰', '橘玫瑰.jpg', 1, 0, '玫瑰', '友情、感性、青春美麗', '', '', '', 'on'),
('000074', '黃玫瑰', '黃玫瑰.jpg', 1, 0, '玫瑰', '已逝的愛、失戀', '', '', '', 'on'),
('000075', '聖誕玫瑰', '聖誕玫瑰.jpg', 1, 0, '玫瑰', '我無法給你任何東西', '', '', '', 'on'),
('000076', '燭光玫瑰', '燭光玫瑰.jpg', 1, 0, '玫瑰', '純潔、真摯、美好的祝福', '', '', '', 'on'),
('000077', '扶桑', '扶桑.jpg', 1, 0, '', '新鮮的戀情、體貼', '下午茶時光', '', '', 'on'),
('000078', '黃鬱金香', '黃鬱金香.jpg', 1, 0, '鬱金香', '沒有希望的愛、珍重', '安靜離職中', '綠帽的感覺', '', 'on'),
('000079', '粉鬱金香', '粉鬱金香.jpg', 1, 0, '鬱金香', '熱愛、幸福、喜悅', '開心', '', '', 'on'),
('000080', '秋水仙', '秋水仙.jpg', 1, 0, '水仙', '最美好的時光已經結束', '', '', '', 'on'),
('000081', '山水仙', '山水仙.jpeg', 1, 0, '水仙', '美好時光、欣欣向榮', '', '', '', 'on'),
('000082', '法國小菊', '法國小菊.jpg', 1, 0, '菊花', '忍耐', '遇到豬隊友', '被上司罵', '有苦難言', 'on'),
('000083', '菊花', '菊花.jpg', 1, 0, '菊花', '清淨、高潔、重生', '', '', '', 'on');

-- --------------------------------------------------------

--
-- 資料表結構 `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `uid` varchar(31) NOT NULL,
  `pid` varchar(7) NOT NULL,
  `quantity` int(11) NOT NULL,
  `pState` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `shoppingcart`
--

INSERT INTO `shoppingcart` (`uid`, `pid`, `quantity`, `pState`) VALUES
('mfee1804', '000001', 1, 'inCart'),
('mfee1804', '000002', 12, 'inCart'),
('mfee1804', '000007', 1, 'inCart'),
('mfee1804', '000009', 1, 'inCart');

-- --------------------------------------------------------

--
-- 資料表結構 `usercoupon`
--

CREATE TABLE `usercoupon` (
  `uid` varchar(31) NOT NULL,
  `couponId` varchar(16) NOT NULL,
  `state` varchar(10) NOT NULL,
  `text` varchar(151) NOT NULL,
  `saleSelect` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `usercoupon`
--

INSERT INTO `usercoupon` (`uid`, `couponId`, `state`, `text`, `saleSelect`) VALUES
('mfee1804', 'pp95t230831', '已使用', '95折', 0.95),
('mfee1804', 'pt200t230715', '未使用', '折200元', -200),
('nina123', 'pt200t230715', '未使用', '折200元', -200);

-- --------------------------------------------------------

--
-- 資料表結構 `userinfo`
--

CREATE TABLE `userinfo` (
  `uid` varchar(31) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `userName` varchar(151) NOT NULL,
  `headshot` varchar(301) NOT NULL,
  `userEmail` varchar(51) NOT NULL,
  `userPhone` varchar(16) NOT NULL,
  `userAccount` int(11) NOT NULL,
  `userAddress` varchar(151) NOT NULL,
  `userCity` varchar(30) DEFAULT NULL,
  `userCounty` varchar(30) DEFAULT NULL,
  `userStreet` varchar(151) NOT NULL,
  `state` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `userinfo`
--

INSERT INTO `userinfo` (`uid`, `pwd`, `userName`, `headshot`, `userEmail`, `userPhone`, `userAccount`, `userAddress`, `userCity`, `userCounty`, `userStreet`, `state`) VALUES
('aaa785246', '$2b$10$.KVxWTpn2zLW3VYejKAHiekm9a1eLJ/q0KCmMdVYVTU2dXzurai8y', '朱峻佑', '', 'aaa785246@gmail.com', '0973608345', 0, '台中市神岡區大漢街一巷', '台中市', '神岡區', '大漢街一巷', ''),
('asdasd123', '$2b$10$liA/ZYvrwSZtYqhdo4mkBu2.gbc9xVN8zqrGsx74Y1FSTx3et13/q', '黃逸臣', '', 'eason100203@gmail.com', '0920140202', 0, 'hhhhhhh', 'hh', 'hh', 'hhh', ''),
('hoshino0000', '$2b$10$TE79ubquVh0oCV28z9mxEunvrGh66yQ5i7oRR/VPg5qYfTHTbD.r6', '陳柏勲', '', 'babg061516@gmail.com', '0915312591', 0, '台中市神岡區豐洲路', '台中市', '神岡區', '豐洲路', ''),
('mfee1804', '$2b$10$NFguLzSphC2LYYJNoeEb5.uciNmBqSGYomU3ikqNs6TU/fIbua7Cy', '資展彭于晏', '', 'mfee18041804@gmail.com', '0915312590', 0, '台中市南屯區公益路二段51號', '台中市', '南屯區', '公益路二段51號', ''),
('nina123', '$2b$10$RBKSYwCcqSHOKdKadHWLQOz5wSYGReOBdlMKd.BW4EVPBN5LiuXJK', 'nina', '', '', '', 0, '', '', '', '', '');

-- --------------------------------------------------------

--
-- 檢視表結構 `cartfororder`
--
DROP TABLE IF EXISTS `cartfororder`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cartfororder`  AS SELECT `shoppingcart`.`uid` AS `uid`, `shoppingcart`.`pid` AS `pid`, `product`.`pName` AS `pName`, `product`.`unitPrice` AS `price`, `product`.`pImage` AS `pImage`, `shoppingcart`.`quantity` AS `quantity`, `shoppingcart`.`quantity`* `product`.`unitPrice` AS `total`, `shoppingcart`.`pState` AS `pState`, concat('花材：',`product`.`pName`,`shoppingcart`.`quantity`,'朵\n配件：時令花材\n包裝：綠色系\n尺寸：寬45公分、高35公分') AS `text` FROM (`product` join `shoppingcart`) WHERE `product`.`pid` = `shoppingcart`.`pid` ;

-- --------------------------------------------------------

--
-- 檢視表結構 `orderdetails`
--
DROP TABLE IF EXISTS `orderdetails`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `orderdetails`  AS SELECT `history`.`uid` AS `uid`, `history`.`orderNo` AS `orderNo`, `historydetails`.`pid` AS `pid`, `product`.`pName` AS `pName`, `product`.`pImage` AS `pImage`, `historydetails`.`quantity` AS `quantity`, `historydetails`.`quantity`* `historydetails`.`unitPriceWhenBought` AS `subtotal`, `history`.`useCoupon` AS `useCoupon`, `history`.`total` AS `total`, `history`.`time` AS `time`, `history`.`payWay` AS `payWay`, `history`.`orderName` AS `orderName`, `history`.`orderPhone` AS `orderPhone`, `history`.`orderAddress` AS `orderAddress`, concat('花材：',`product`.`pName`,`historydetails`.`quantity`,'朵\n配件：時令花材\n包裝：綠色系\n尺寸：寬45公分、高35公分') AS `text` FROM ((`history` join `historydetails`) join `product`) WHERE `history`.`orderNo` = `historydetails`.`orderNo` AND `historydetails`.`pid` = `product`.`pid` ;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `allcoupon`
--
ALTER TABLE `allcoupon`
  ADD PRIMARY KEY (`couponId`);

--
-- 資料表索引 `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `historydetails`
--
ALTER TABLE `historydetails`
  ADD PRIMARY KEY (`orderNo`,`pid`);

--
-- 資料表索引 `likelist`
--
ALTER TABLE `likelist`
  ADD PRIMARY KEY (`uid`,`pid`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pid`);

--
-- 資料表索引 `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`uid`,`pid`);

--
-- 資料表索引 `usercoupon`
--
ALTER TABLE `usercoupon`
  ADD PRIMARY KEY (`uid`,`couponId`);

--
-- 資料表索引 `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`uid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
