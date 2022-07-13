import { check, body } from 'express-validator';
const carInsertValidation = [
    check('ymd', '발생일은 필수입니다').not().isEmpty(),
    check('event_cd', 'event코드는  필수입니다').not().isEmpty(),
    check('event_nm', 'event명은  필수입니다').not().isEmpty(),
    body('age').isInt().withMessage('숫자를 입력해!'),
]
export default carInsertValidation

// create table if not exists car (
//     id int primary key auto_increment comment 'id',
//     ymd varchar(8) not null comment '발생일',
// 	event_cd char(1) not null comment '1:주유,2:정비,9:기타',
// 	event_nm varchar(50) not null comment '이벤트명',
// 	km int null comment '주행거리',
// 	ju_cost int null comment '주유금액',
// 	ju_place varchar(100) null  comment '주유장소',
// 	ju_wonja int null comment '주유원가',
// 	jb_cost int null comment '정비금액',
// 	jb_place varchar(100) null comment '정비장소',
// 	jb_note text null comment '정비내용',
//     upd_id varchar(20) not null comment '수정자 id',
//     upd_dt timestamp default current_timestamp comment '수정 datetime'
// )ENGINE=INNODB CHARSET=utf8 comment '차계부';