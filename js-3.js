<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
let eded = prompt("Zəhmət olmasa bir ədəd daxil edin:");


eded = Number(eded);


if (isNaN(eded)) {
  console.log("Xahiş olunur yalnız ədəd daxil edin!");
} else if (eded % 2 === 0) {
  console.log(eded + " cüt ədəddir.");
} else {
  console.log(eded + " tək ədəddir.");
}
</script>
</body>
</html>