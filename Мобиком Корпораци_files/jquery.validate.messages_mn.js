(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery", "jquery.validate"], factory );
    } else {
        factory( jQuery );
    }
}(function( $ ) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: RU (Russian; русский язык)
     */
    $.extend($.validator.messages, {
        required: "Энэ талбарыг заавал бөглөнө үү.",
        remote: "Уучлаарай, зөв утга оруулна уу.",
        email: "Уучлаарай, И-Мэйл хаяг зөв оруулна уу.",
        url: "Уучлаарай, URL хаяг зөв оруулна уу.",
        date: "Уучлаарай, он сар өдөр зөв оруулна уу.",
        dateISO: "Уучлаарай, ISO форматтай огноо зөв оруулна уу.",
        number: "Уучлаарай, тоо оруулна уу.",
        digits: "Уучлаарай, зөвхөн тоо оруулна уу.",
        creditcard: "Уучлаарай, картын дугаараа зөв оруулна уу.",
        equalTo: "Уучлаарай, оруулсан утгыг дахин оруулна уу.",
        extension: "Уучлаарай, зөв өргөтгөлтэй файл сонгоно уу.",
        maxlength: $.validator.format("Уучлаарай, {0} тэмдэгтээс ихгүй оруулна уу."),
        minlength: $.validator.format("Уучлаарай, {0} тэмдэгтээс багагүй оруулна уу."),
        rangelength: $.validator.format("Уучлаарай, {0}-с {1} хүртэлх урттай тэмдэгт оруулна уу."),
        range: $.validator.format("Уучлаарай, {0}-с {1} хүртэлх тоо оруулна уу."),
        max: $.validator.format("Уучлаарай, {0}-тэй тэнцүү эсвэл бага тоо оруулна уу."),
        min: $.validator.format("Уучлаарай, {0}-тэй тэнцүү эсвэл их тоо оруулна уу.")
    });

}));