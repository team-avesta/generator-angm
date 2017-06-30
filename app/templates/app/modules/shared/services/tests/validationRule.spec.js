(function() {
	'use strict';

	describe('validation rules test', function() {
		var controller = null,
			validationProvider = null,
			expression = null,
			$scope = null;

		beforeEach(function() {
			module('agencyapp');
		});

		beforeEach(inject(function($injector) {
			validationProvider = $injector.get('$validation');
			expression = validationProvider.getExpression;
		}));

		it('canary test', function() {
			expect(true).to.be.eql(true);
		});

		it('required should return false if called with no params', function() {
			var required = expression('required');
			expect(required()).to.be.false;
		});

		it('required should return false if called with null', function() {
			var required = expression('required');
			expect(required(null)).to.be.false;
		});

		it('required should return false if called with ""', function() {
			var required = expression('required');
			expect(required("")).to.be.false;
		});

		it('required should return false if called without args', function() {
			var required = expression('required');
			expect(required()).to.be.false;
		});

		it('required should return true if called with string as args', function() {
			var required = expression('required');
			expect(required('string')).to.be.true;
		});

		it('required should return true if called with number as args', function() {
			var required = expression('required');
			expect(required(123)).to.be.true;
		});

		it('url should return false if called with no params', function() {
			var url = expression('url');
			expect(url.test()).to.be.false;
		});

		it('url should return false if called with null', function() {
			var url = expression('url');
			expect(url.test(null)).to.be.false;
		});

		it('url should return false if called with ""', function() {
			var url = expression('url');
			expect(url.test("")).to.be.false;
		});

		it('url should return false if called with www.foufos', function() {
			var url = expression('url');
			expect(url.test("www.foufos")).to.be.false;
		});

		it('url should return false if called with http://www.foufos', function() {
			var url = expression('url');
			expect(url.test("http://www.foufos")).to.be.false;
		});

		it('url should return false if called with http://foufos', function() {
			var url = expression('url');
			expect(url.test("http://foufos")).to.be.false;
		});

		it('url should return false if called with www.mp3#.com', function() {
			var url = expression('url');
			expect(url.test("www.mp3#.com")).to.be.false;
		});

		it('url should return false if called with www.foufos-.gr', function() {
			var url = expression('url');
			expect(url.test("www.foufos-.gr")).to.be.false;
		});

		it('url should return false if called with www.-foufos.gr', function() {
			var url = expression('url');
			expect(url.test("www.-foufos.gr")).to.be.false;
		});

		it('url should return false if called with foufos.com', function() {
			var url = expression('url');
			expect(url.test("foufos.com")).to.be.false;
		});

		it('url should return false if called with .com', function() {
			var url = expression('url');
			expect(url.test(".com")).to.be.false;
		});

		it('url should return true if called with www.website.com', function() {
			var url = expression('url');
			expect(url.test("www.website.com")).to.be.true;
		});

		it('url should return true if called with http://www.website.com', function() {
			var url = expression('url');
			expect(url.test("http://www.website.com")).to.be.true;
		});

		it('url should return true if called with http://www.foufos.gr/kino', function() {
			var url = expression('url');
			expect(url.test("http://www.foufos.gr/kino")).to.be.true;
		});

		it('url should return true if called with http://t.co', function() {
			var url = expression('url');
			expect(url.test("http://t.co")).to.be.true;
		});

		it('email should return false if called with no params', function() {
			var email = expression('email');
			expect(email.test()).to.be.false;
		});

		it('email should return false if called with ""', function() {
			var email = expression('email');
			expect(email.test('')).to.be.false;
		});

		it('email should return false if called with null', function() {
			var email = expression('email');
			expect(email.test(null)).to.be.false;
		});

		it('email should return false if no "@" and no "." in string', function() {
			var email = expression('email');
			expect(email.test('asanandiyagmail')).to.be.false;
		});

		it('email should return false if no "@" in string', function() {
			var email = expression('email');
			expect(email.test('asanandiyagmail.com')).to.be.false;
		});

		it('email should return false if no "." in string', function() {
			var email = expression('email');
			expect(email.test('asanandiya@gmailcom')).to.be.false;
		});

		it('email should return false if no character before "@"', function() {
			var email = expression('email');
			expect(email.test('@gmail.com')).to.be.false;
		});

		it('email should return false if no character after "@" and before"."', function() {
			var email = expression('email');
			expect(email.test('asanandiya@.com')).to.be.false;
		});

		it('email should return false if no character after "."', function() {
			var email = expression('email');
			expect(email.test('asanandiya@gmail.')).to.be.false;
		});

		it('email should return true if string is valid email', function() {
			var email = expression('email');
			expect(email.test('asanandiya@gmail.com')).to.be.true;
		});

		it('number should return false if called with no params', function() {
			var number = expression('number');
			expect(number.test('')).to.be.false;
		});

		it('number should return false if called with null', function() {
			var number = expression('number');
			expect(number.test(null)).to.be.false;
		});

		it('number should return false if called with string', function() {
			var number = expression('number');
			expect(number.test('string')).to.be.false;
		});

		it('number should return false if called with special characters', function() {
			var number = expression('number');
			expect(number.test('#*/.,')).to.be.false;
		});

		it('number should return false if called with numbers and string together', function() {
			var number = expression('number');
			expect(number.test(123 + "string")).to.be.false;
		});

		it('number should return true if called with only numbers', function() {
			var number = expression('number');
			expect(number.test(123)).to.be.true;
		});

		it('password should return false if called with no params', function() {
			var password = expression('password');
			expect(password.test()).to.be.false;
		});

		it('password should return false if called with ""', function() {
			var password = expression('password');
			expect(password.test("")).to.be.false;
		});

		it('password should return false if called with null', function() {
			var password = expression('password');
			expect(password.test(null)).to.be.false;
		});

		it('password should return false if called with only string', function() {
			var password = expression('password');
			expect(password.test('string')).to.be.false;
		});

		it('password should return false if called with string and numbers', function() {
			var password = expression('password');
			expect(password.test('string123')).to.be.false;
		});

		it('password should return false if called with string and special characters', function() {
			var password = expression('password');
			expect(password.test('string!@')).to.be.false;
		});

		it('password should return false if called with number and special characters', function() {
			var password = expression('password');
			expect(password.test('123!@')).to.be.false;
		});

		it('password should return false if called with less then 6 characters', function() {
			var password = expression('password');
			expect(password.test('str3@')).to.be.false;
		});

		it('password should return true if called with string, min 1 number, min 1 special characters and length 6 or more', function() {
			var password = expression('password');
			expect(password.test('string3!')).to.be.true;
		});

		it('password should return true if called with string, more then 1 number, more then 1 special characters and length 6 or more', function() {
			var password = expression('password');
			expect(password.test('st13@!')).to.be.true;
		});

		it('password should return true if called with string, min 1 number and special character but length more then 6', function() {
			var password = expression('password');
			expect(password.test('stsdfsdff1!')).to.be.true;
		});


		it('minlength should return false if called with no params', function() {
			var minlength = expression('minlength');
			expect(minlength()).to.be.false;
		});

		it('minlength should return false if called with ""', function() {
			var minlength = expression('minlength');
			expect(minlength("", 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('minlength should return false if called with null', function() {
			var minlength = expression('minlength');
			expect(minlength(null, 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('minlength should return false if called with object', function() {
			var minlength = expression('minlength');
			expect(minlength({}, 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('minlength should return false if called with string with less then minlength', function() {
			var minlength = expression('minlength');
			expect(minlength('string', 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('minlength should return true if called with string with same length as minlength', function() {
			var minlength = expression('minlength');
			expect(minlength('string1', 'scope', 'element', 'attrs', 7)).to.be.true;
		});

		it('minlength should return true if called with string with more then minlength', function() {
			var minlength = expression('minlength');
			expect(minlength('string11', 'scope', 'element', 'attrs', 7)).to.be.true;
		});

		it('maxlength should return true if called with no params', function() {
			var maxlength = expression('maxlength');
			expect(maxlength()).to.be.true;
		});

		it('maxlength should return true if called with null', function() {
			var maxlength = expression('maxlength');
			expect(maxlength(null, 'scope', 'element', 'attrs', 7)).to.be.true;
		});

		it('maxlength should return true if called with ""', function() {
			var maxlength = expression('maxlength');
			expect(maxlength("", 'scope', 'element', 'attrs', 7)).to.be.true;
		});

		it('maxlength should return false if called with object', function() {
			var maxlength = expression('maxlength');
			expect(maxlength({}, 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('maxlength should return false if called with numbers', function() {
			var maxlength = expression('maxlength');
			expect(maxlength(123456, 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('maxlength should return false if called with string more then maxlength', function() {
			var maxlength = expression('maxlength');
			expect(maxlength('string12', 'scope', 'element', 'attrs', 7)).to.be.false;
		});

		it('maxlength should return true if called with string same length maxlength', function() {
			var maxlength = expression('maxlength');
			expect(maxlength('string1', 'scope', 'element', 'attrs', 7)).to.be.true;
		});

		it('maxlength should return true if called with string less then maxlength', function() {
			var maxlength = expression('maxlength');
			expect(maxlength('string', 'scope', 'element', 'attrs', 7)).to.be.true;
		});

		it('matching should return false if called with no params', function() {
			var matching = expression('matching');
			expect(matching()).to.be.false;
		});

		it('matching should return false if called with null', function() {
			var matching = expression('matching');
			expect(matching(null)).to.be.false;
		});

		it('matching should return false if called with ""', function() {
			var matching = expression('matching');
			expect(matching(null)).to.be.false;
		});

		it('matching should return false if value and matchingValue are not same', function() {
			var matching = expression('matching');
			var attrs = { matchingValue: 'aaa' }
			expect(matching('val', 'scope', 'element', attrs)).to.be.false;
		});

		it('matching should return false if value and matchingValue are same but type are diffrent', function() {
			var matching = expression('matching');
			var attrs = { matchingValue: false }
			expect(matching('false', 'scope', 'element', attrs)).to.be.false;
		});

		it('matching should return true if value and matchingValue are same but type are diffrent', function() {
			var matching = expression('matching');
			var attrs = { matchingValue: '0' }
			expect(matching(0, 'scope', 'element', attrs)).to.be.false;
		});

		it('matching should return true if value and matchingValue are same with same type', function() {
			var matching = expression('matching');
			var attrs = { matchingValue: 0 }
			expect(matching(0, 'scope', 'element', attrs)).to.be.true;
		});

		it('matching should return true if value and matchingValue are same with same type', function() {
			var matching = expression('matching');
			var attrs = { matchingValue: 'stringval' }
			expect(matching('stringval', 'scope', 'element', attrs)).to.be.true;
		});

	});
})();
