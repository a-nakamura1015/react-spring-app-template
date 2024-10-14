# ベースイメージとして AdoptOpenJDK を使用
FROM openjdk:17-jdk-slim

# 作業ディレクトリを設定
WORKDIR /app

# Gradle ラッパーとソースコードをコピー
COPY gradlew ./
COPY gradle ./gradle
COPY build.gradle ./
COPY settings.gradle ./

# ソースコードをコピー
COPY src ./src

# ビルド
RUN ./gradlew build --no-daemon

# アプリケーションを実行
CMD ["java", "-jar", "build/libs/backend-0.0.1-SNAPSHOT.jar"]
