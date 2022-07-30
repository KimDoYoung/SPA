drop table if exists car;
create table if not exists car (
    id int primary key auto_increment comment 'id',
    ymd varchar(8) not null comment '발생일',
	event_cd char(1) not null comment '1:주유,2:정비,9:기타',
	event_nm varchar(50) not null comment '이벤트명',
	km int null comment '주행거리',
	ju_cost int null comment '주유금액',
	ju_place varchar(100) null  comment '주유장소',
	ju_wonja int null comment '주유원가',
	jb_cost int null comment '정비금액',
	jb_place varchar(100) null comment '정비장소',
	jb_note text null comment '정비내용',
    upd_id varchar(20) not null comment '수정자 id',
    upd_dt timestamp default current_timestamp comment '수정 datetime'
)ENGINE=INNODB CHARSET=utf8 comment '차계부';

drop table if exists users;
create table if not exists users (
    user_id varchar(100) not null comment 'user id email',
    user_pw varchar(100) not null comment 'user pw',
    nm varchar(10) not null comment 'user name',
    auth varchar(10) null comment 'user auth',
    primary key(user_id)
)ENGINE=INNODB CHARSET=utf8 comment 'account user';

drop table if exists car_file;
create table if not exists car_file (
    id int primary key auto_increment comment 'id',
    phy_dir varchar(300) not null comment '저장폴더',
    phy_nm  varchar(100) not null comment '저장파일명',
    org_nm  varchar(100) not null comment '원래파일명',
    ext varchar(20) null comment '확장자',
    size long not null comment '파일크기'
)ENGINE=INNODB CHARSET=utf8  comment '첨부파일';


drop table if exists car_file_match;
create table if not exists car_file_match(
    car_id int not null comment 'table car id',
    file_id int not null comment 'table file id',
    primary key (car_id, file_id)
)ENGINE=INNODB CHARSET=utf8 comment 'car file match';

