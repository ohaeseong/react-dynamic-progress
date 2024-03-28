import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts', // 진입 경로
    output: {
      file: './dist/index.js', // 출력 경로
      format: 'es', // 출력 형식
      sourcemap: true, 
    },
    plugins: [
      typescript()
    ]
  };