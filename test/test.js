var assert = require('assert');
var strongPass = require('../src/strong-pass');

var marks = {
    'Very Weak': 1,
    'Weak': 2,
    'Good': 3,
    'Strong': 4,
    'Very Strong': 5
};

function run(password, score, mark){
    assert.equal(strongPass['engine'](password), score, 'score');
    assert.equal(strongPass['toMark'](password), mark, 'mark');
    assert.equal(strongPass['default'](password), marks[mark], 'number');
}

describe('tests', function() {

    it('fd$ks', function () {
        run('fd$ks:', 38, 'Weak');
    });

    it('dfklsdlen', function () {
        run('dfklsdlen', 10, 'Very Weak');
    });

    it('dfklsdlen123', function () {
        run('dfklsdlen123', 46, 'Good');
    });

    it('apple##cot0', function () {
        run('apple##cot0', 64, 'Strong');
    });

    describe('Irridium', function() {
        it('Irridium', function () {
            run('Irridium', 26, 'Weak');
        });
        it('Irridium2', function () {
            run('Irridium2', 54, 'Good');
        });
        it('Irridium22', function () {
            run('Irridium22', 64, 'Strong');
        });
        it('Irridium#22', function () {
            run('Irridium#22', 83, 'Very Strong');
        });
        it('Irr$idium#22', function () {
            run('Irr$idium#22', 100, 'Very Strong');
        });
        it('Irri3dium', function () {
            run('Irri3dium', 59, 'Good');
        });
        it('Irri3di^um', function () {
            run('Irri3di^um', 79, 'Strong');
        });
    });

    describe('stupid', function(){
        it('11111111', function () {
            run('11111111', 0, 'Very Weak');
        });
        it('123456', function () {
            run('123456', 4, 'Very Weak');
        });
        it('IUIUOIUIUO', function () {
            run('IUIUOIUIUO', 0, 'Very Weak');
        });
        it('ewmlvnsjdy', function () {
            run('ewmlvnsjdy', 12, 'Very Weak');
        });
        it('qwerty', function () {
            run('qwerty', 8, 'Very Weak');
        });
        it('asdfghgjhk', function () {
            run('asdfghgjhk', 8, 'Very Weak');
        });
        it('1111ffff', function () {
            run('1111ffff', 1, 'Very Weak');
        });
    });

    describe('strong', function(){
        it('nUihnU%9c', function () {
            run('nUihnU%9c', 77, 'Strong');
        });

        it('nUihnU%9c', function () {
            run('nUihnU%9c', 77, 'Strong');
        });
        it('dI3fkp(eo%9c', function () {
            run('dI3fkp(eo%9c', 100, 'Very Strong');
        });
        it('dI3fkTpLeo', function () {
            run('dI3fkTpLeo', 72, 'Strong');
        });
        it('ki$me*U4r', function () {
            run('ki$me*U4r', 88, 'Very Strong');
        });
        it('P@s$w0rD2', function () {
            run('P@s$w0rD2', 98, 'Very Strong');
        });
    });

});
