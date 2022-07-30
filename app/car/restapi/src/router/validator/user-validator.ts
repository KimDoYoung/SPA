import { check } from 'express-validator';
const UserInsertValidation = [check('user_id', 'id는 필수입니다').not().isEmpty(), check('user_pw', 'password는 필수입니다').not().isEmpty(), check('nm', '성명은 필수입니다').not().isEmpty()];
export default UserInsertValidation;
