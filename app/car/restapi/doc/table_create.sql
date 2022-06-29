create table car (
    id int primary key auto_increment comment 'id',
    ymd varchar(8) not null comment '발생일',
	event_cd char(1) not null comment '1:주유,2:정비,9:기타',
	event_nm varchar(50) not null comment '이벤트명',
	km int null comment '주행거리',
	ju_cost int null '주유금액',
	ju_place varchar(100) null '주유장소',
	ju_wonja int null '주유원가',
	jb_cost int null '정비금액',
	jb_place varchar(100) null '정비장소',
	jb_note text null '정비내용',
    upd_id varchar(20) not null '수정자 id',
    upd_dt timestamp default current_timestamp comment '수정 datetime'
) comment '차계부';

create car_user (
    user_id varchar(20) not null comment 'user id',
    user_pw varchar(100) not null comment 'user pw',
    primary key(user_id)
) comment 'car user';

create car_file (
    id int primary key auto_increment comment 'id',
    phy_dir varchar(300) not null comment '저장폴더',
    phy_nm  varchar(100) not null comment '저장파일명',
    org_nm  varchar(100) not null comment '원래파일명',
    ext varchar(20) null comment '확장자',
    size long not null comment '파일크기',
)comment '첨부파일';

create car_file_match(
    car_id int not null,
    file_id int not null,
    primary key (car_id, file_id)
) comment 'car file match';

