/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : industry

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2020-04-29 11:22:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hisdatas
-- ----------------------------
DROP TABLE IF EXISTS `hisdatas`;
CREATE TABLE `hisdatas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` varchar(20) DEFAULT NULL,
  `device_type` varchar(20) DEFAULT NULL,
  `p1` varchar(512) DEFAULT NULL,
  `p2` varchar(512) DEFAULT NULL,
  `p3` varchar(512) DEFAULT NULL,
  `p4` varchar(512) DEFAULT NULL,
  `p5` varchar(512) DEFAULT NULL,
  `p6` varchar(512) DEFAULT NULL,
  `p7` varchar(512) DEFAULT NULL,
  `p8` varchar(512) DEFAULT NULL,
  `p9` varchar(512) DEFAULT NULL,
  `p10` varchar(512) DEFAULT NULL,
  `p11` varchar(512) DEFAULT NULL,
  `p12` varchar(512) DEFAULT NULL,
  `p13` varchar(512) DEFAULT NULL,
  `p14` varchar(512) DEFAULT NULL,
  `p15` varchar(512) DEFAULT NULL,
  `p16` varchar(512) DEFAULT NULL,
  `p17` varchar(512) DEFAULT NULL,
  `p18` varchar(512) DEFAULT NULL,
  `p19` varchar(512) DEFAULT NULL,
  `p20` varchar(512) DEFAULT NULL,
  `up_data` varchar(1024) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of hisdatas
-- ----------------------------
INSERT INTO `hisdatas` VALUES ('1', '020420111222', '0420', null, null, '30', '80', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `hisdatas` VALUES ('2', '020420111223', '0420', null, null, '35', '60', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `hisdatas` VALUES ('3', '0203a0fff800', '03a0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'deviceId=0203a0fff800&p1=89860317422051610553&p2=0.0604&p3=2&p4=1&p5=4&pn=000000000000000000000000000000000000000000000000000000', '2019-11-04 10:54:42', '2019-11-04 10:54:42');
INSERT INTO `hisdatas` VALUES ('4', '0203a0fff800', '03a0', '89860317422051610553', '0.0604', '2', '1', '4', '000000000000000000000000000000000000000000000000000000', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'deviceId=0203a0fff800&p1=89860317422051610553&p2=0.0604&p3=2&p4=1&p5=4&pn=000000000000000000000000000000000000000000000000000000', '2019-11-04 10:55:25', '2019-11-04 10:55:25');
