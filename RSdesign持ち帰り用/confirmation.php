<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>問い合わせ内容確認画面</title>
  <link rel="stylesheet" type="text.css" href="./css/confirmation.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css">
</head>

<body>
  <h2>問い合わせ内容</h2>

  <form action="mailto.php" method="post">

    <table border="1">
      <tr>
        <th>名前</th>
        <td><?php echo $_POST["name"]; ?></td>
      </tr>

      <tr>
        <th>メールアドレス</th>
        <td><?php echo $_POST["mail"]; ?></td>
      </tr>

      <tr>
        <th>問い合わせ内容</th>
        <td><?php echo $_POST["inquiry"]; ?></td>
      </tr>
    </table>

    <input type="submit" value="送信">
  </form>
</body>

</html>