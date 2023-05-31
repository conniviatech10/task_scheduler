$(function () {
    $('.dd').nestable();

    $('.dd').on('change', function () {
        console.log('first');
        var $this = $(this);
        var serializedData = window.JSON.stringify($($this).nestable('serialize'));

        $this.parents('div.body').find('textarea').val(serializedData);
    });

    $('.dd4').nestable();

    $('.dd4').on('change', function () {
        console.log('second');
        var $this = $(this);
        var serializedData = window.JSON.stringify($($this).nestable('serialize'));
    });
});