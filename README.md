# react-spring-app-template
フロントエンドが React + TypeScript、バックエンドが Spring のアプリのテンプレート

## プロジェクト構成
```
project-root/
├── frontend/          # React + TypeScript アプリケーション
├── backend/           # Spring Boot + TypeScript API サーバ
├── db/                # MySQLの初期化スクリプトと設定
├── docker-compose.yml # Docker Compose の設定ファイル
└── README.md          # プロジェクトの説明
```

## 環境構築
手動で依存関係をインストールします。
- フロントエンド
  ```
  cd frontend
  npm install
  ```
- バックエンド
  ```
  cd backend
  ./gradlew build
  ```

## 動作確認手順
1. フロントエンド、バックエンド、MySQLデータベースのコンテナを起動します。
    ```
    docker compose up --build
    ```
1. ブラウザでフロントエンドアプリケーションにアクセスします。
    ```
    http://localhost:3000
    ```
1. バックエンドAPIの動作を確認するには、以下のエンドポイントにアクセスします。
- 全てのユーザーを取得
  ```
  curl http://localhost:8080/api/users
  ```
- 新規ユーザーを作成
  ```
  curl -X POST http://localhost:8080/api/users -H "Content-Type: application/json" -d '{"name":"Jane Doe", "email":"jane.doe@example.com"}'
  ```
- ユーザー情報の更新
  ```
  curl -X PUT http://localhost:8080/api/users/1 -H "Content-Type: application/json" -d '{"name":"John Smith", "email":"john.smith@example.com"}'
  ```
- ユーザーの削除
  ```
  curl -X DELETE http://localhost:8080/api/users/1
  ```
