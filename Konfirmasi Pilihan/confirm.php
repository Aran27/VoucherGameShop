<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konfirmasi Pembayaran</title>
    <link rel="stylesheet" href="/hehe/VoucherGameShop/Code/Homepage.css">
    <link rel="stylesheet" href="confirm.css">

</head>
<?php
require 'koneksi.php';
error_reporting(0);


$id =  $_POST["id-game"];
$voucher =  $_POST["opsi-voucher"];
$email = $_POST["email"];
$Opsi_Bayar = $_POST["opsi-bayar"];
$arr = explode(" ", $Opsi_Bayar);
$harga = $arr[0];
$payment = $arr[1];
$Game = $_POST["namaGame"];
$eyemoney = eyemoney($Game);


if (isset($_POST["terima"])) {

    if (input_data($_POST) > 0) {
        echo "<script>
            alert('Pembayaran Berhasil !');
            document.location.href = '../Confirm Payment/index.html';
            </script>
            ";
    } else {
        echo "<script>
            alert('Pembayaran Gagal !');
            document.location.href = '../Confirm Payment/index.html';
            </script>
            ";
    }
}


?>

<body>
    <!-- Navbar -->
    <div class="navbar">
        <div class="logo">
            <a href="../Code/Homepage.html">
                <img src="TokoTokoTok Logo-wide.png" class="gamepad" alt="logo" width="105px">
            </a>
        </div>
        <div class="bacaan">
            <p>
                <font size="4">SUDAH SIAP MENGHABISKAN DOMPET MAMAH?</font>
                <?php


                //echo $arr[0];
                //echo $arr[1];
                ?>
            </p>
        </div>
        <a href="" class="contact"><button>Contact &#127939;</button></a>
    </div>

    <div class="grid-container">
        <div class="grid-item" id="ex"></div>
        <div class="grid-item">
            <h3>Detail Pemesanan</h3><br>
            <div style="padding: 25px;">
                <form action="" method="post">
                    <p id="x">Mohon konfirmasi ID dan pilihan anda sudah benar.<br><br><br>
                        ID :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<?php echo $id ?><br><br>
                        Voucher :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<?php echo $voucher;
                                                                                                echo " ";
                                                                                                echo $eyemoney; ?><br><br>
                        Game :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<?php echo $Game; ?><br><br>
                        Bayar dengan :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<?php echo $payment; ?><br><br>
                        Total Pembayaran :&emsp;&emsp;&emsp;&emsp;&emsp;<?php echo "Rp. " ?> <?php echo number_format($harga); ?>
                    </p>
                    <!--Start Input-->
                    <input type="hidden" name="id" value='<?php echo $id; ?> '>
                    <input type="hidden" name="voucher" value='<?php echo $voucher; ?> '>
                    <input type="hidden" name="harga" value='<?php echo $harga; ?> '>
                    <input type="hidden" name="payment" value='<?php echo $payment; ?> '>
                    <input type="hidden" name="email" value='<?php echo $email; ?> '>
                    <input type="hidden" name="game" value='<?php echo $Game; ?> '>
                    <!--end Input-->
                    <div style="text-align:right; margin-top: 15vh;">

                        <a href="javascript:history.back()">
                            <input type="button" class="input" value="Batalkan">
                        </a>
                        <a href="../Confirm Payment/index.html">
                            <button class="input" name="terima">Terima</button>
                            <input type="button" class="input" value="Konfirm">
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <div class="grid-item" id="ex"></div>
    </div>
</body>

</html>
<?php

function eyemoney($media)
{
    if ($media == "Valorant") {
        return "Valorant Point";
    } else if ($media == "Free Fire" or $media == "Mobile Legends") {
        return "Diamonds";
    } else if ($media == "Genshin Impact") {
        return "Genesis Crystals";
    } else if ($media == "COD Mobile") {
        return "CP";
    } else if ($media == "PUBG Mobile") {
        return "UC";
    }
}


?>