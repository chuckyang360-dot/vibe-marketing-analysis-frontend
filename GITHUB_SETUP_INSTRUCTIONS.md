# 如何将本地仓库连接到GitHub

1. 首先，在GitHub网站上创建一个新的仓库：
   - 登录到您的GitHub账户
   - 点击"New repository"按钮
   - 为仓库命名（例如："vibe-marketing-analysis-frontend"）
   - 选择"Public"或"Private"
   - 不要勾选"Initialize this repository with a README"
   - 点击"Create repository"

2. 复制仓库的SSH或HTTPS地址

3. 返回终端，添加远程仓库地址：
   ```bash
   git remote add origin <YOUR_REPOSITORY_URL>
   ```
   （将<YOUR_REPOSITORY_URL>替换为您复制的实际仓库地址）

4. 推送代码到GitHub：
   ```bash
   git branch -M main
   git push -u origin main
   ```

5. 如果您计划频繁推送，建议设置SSH密钥以避免每次输入用户名和密码：
   - 生成SSH密钥：ssh-keygen -t ed25519 -C "your_email@example.com"
   - 将公钥添加到GitHub账户
   - 使用SSH URL而不是HTTPS URL

注意：如果您尚未在GitHub上配置SSH密钥或访问令牌，您需要先完成这一步骤才能推送代码。