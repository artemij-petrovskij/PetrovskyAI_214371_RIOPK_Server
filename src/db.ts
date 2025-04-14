import { sequelize } from './models/index';

export const initDatabase = async (): Promise<void> => {
  try {
    await sequelize.sync({ alter: true }); // Синхронизация базы данных
    console.log('База данных успешно синхронизирована.');
  } catch (error) {
    console.error('Ошибка синхронизации базы данных:', error);
  }
};
