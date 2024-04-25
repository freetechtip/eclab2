

<?php
// $_POST["size"] to get size
$size = $_POST["size"];
echo('<link href="style.css" rel="stylesheet">');
echo('<table>');
for ($row = 0; $row <= $size; $row++) {
    echo('<tr>');
    for ($col = 0; $col <= $size; $col++) {
        if ($row == 0 or $col == 0) {
            echo('<th>'.$row+$col.'</th>');
        } else {
            echo('<td>'.$row*$col.'</td>');
        }
    }
    echo('</tr>');
}
echo('</table>');
?>