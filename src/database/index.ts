import mongoose from 'mongoose';

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('Conectando ao banco de dados...');
    await mongoose.connect(process.env.MONGO_URL as string);
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('Conectado ao banco de dados!');
  } catch {
    throw new Error('Não foi possível conectar ao banco de dados');
  }
}
