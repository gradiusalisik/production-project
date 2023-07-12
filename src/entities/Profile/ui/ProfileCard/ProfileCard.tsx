import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.profileCard, { [cls.loading]: true }, [
          className,
          cls.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.info}>
        {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={t('Аватар')} />
        </div>
        )}
        <Input
          value={data?.first}
          className={cls.input}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          className={cls.input}
          placeholder={t('Ваше фамилия')}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          className={cls.input}
          placeholder={t('Ваш возраст')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          className={cls.input}
          placeholder={t('Город')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          className={cls.input}
          placeholder={t('Введите имя пользователя')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          className={cls.input}
          placeholder={t('Введите ссылку на аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />

        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
