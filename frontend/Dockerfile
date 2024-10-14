# ベースイメージとして node を使用
FROM node:16-alpine

# 作業ディレクトリを作成
WORKDIR /app

# 依存関係ファイルをコピーし、npm install で依存関係をインストール
COPY package.json package-lock.json ./
RUN npm ci

# ソースコードをコピー
COPY . .

# node_modules/.bin を PATH に追加
ENV PATH="./node_modules/.bin:$PATH"

# /app ディレクトリとその中の全てのディレクトリに書き込み権限を付与
RUN chmod -R 777 /app

# アプリケーションを起動
CMD ["npm", "run", "dev"]
