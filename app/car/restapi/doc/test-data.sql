
INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220101', '1', '주유', 12000, 50000, '은평주유소', NULL, NULL, NULL, NULL, 'kdy987', current_timestamp());


INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220201', '1', '주유', 12345, 52000, '불광주유소', NULL, NULL, NULL, NULL, 'kdy987', current_timestamp());


INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220303', '1', '주유', 13345, 42000, '은평주유소', NULL, NULL, NULL, NULL, 'kdy987', current_timestamp());

INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220413', '1', '주유', 13545, 32000, '불광주유소', NULL, NULL, NULL, NULL, 'kdy987', current_timestamp());

INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220512', '1', '주유', 14345, 72000, '불광주유소', NULL, NULL, NULL, NULL, 'kdy987', current_timestamp());

INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220413', '2', '정비', 13545, 32000, '불광자동차수리소', NULL, NULL, NULL, NULL, 'kdy987', current_timestamp());

INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220513', '2', '정비', NULL, NULL, NULL , NULL, 320000, '불광자동차수리소', '엔진오일교체', 'kdy987', current_timestamp());

INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220212', '2', '정비', NULL, NULL, NULL , NULL, 620000, '은평자동차수리소', '바퀴교체, 엔진수리', 'kdy987', current_timestamp());

INSERT INTO jskndb.car
(ymd, event_cd, event_nm, km, ju_cost, ju_place, ju_wonja, jb_cost, jb_place, jb_note, upd_id, upd_dt)
VALUES('20220212', '3', '세차도구 구매', NULL, NULL, NULL , NULL, NULL, '쿠팡', '세차도구를 구매함', 'kdy987', current_timestamp());


INSERT INTO jskndb.users
(user_id, user_pw, nm)
VALUES('user1', '1234', '홍길동');
INSERT INTO jskndb.users
(user_id, user_pw, nm)
VALUES('user2', '1234', '고길동');
INSERT INTO jskndb.users
(user_id, user_pw, nm)
VALUES('user3', '1234', '마이콜');
INSERT INTO jskndb.users
(user_id, user_pw, nm, auth)
VALUES('kdy987@gmail.com', '1234', '김도영', 'admin');

select * from users;
select * from car;
