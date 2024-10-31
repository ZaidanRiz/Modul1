<?php
$tinggi = 5;

for ($i = 1; $i <= $tinggi; $i++) {
    // Cetak spasi untuk membentuk segitiga
    for ($j = $i; $j < $tinggi; $j++) {
        echo "&nbsp;&nbsp;";
    }
    
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }

    echo "<br>";
}
?>