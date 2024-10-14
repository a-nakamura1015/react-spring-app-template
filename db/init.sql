-- データベースが存在しない場合は作成
CREATE DATABASE IF NOT EXISTS mydb;

-- データベースを選択
USE mydb;

-- テーブルを作成
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
