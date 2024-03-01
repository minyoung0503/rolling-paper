import Profile from '../../../components/Profile/Profile';
import css from './SelectProfileImage.module.scss';

const SelectProfileImage = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>프로필 이미지</h1>
      <div className={css.profileImage}>
        <Profile className={css.defaultImage} />
        <div className={css.profileBox}>
          <h2 className={css.selectProfile}>프로필 이미지를 선택해주세요!</h2>
          <div className={css.imageList}>
            <Profile className={css.image} />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProfileImage;
