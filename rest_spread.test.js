let testObj;
beforeEach(() => {
    testObj = {name : 'john'};
});

describe('#filterOutOddsArrow', () => {
    it('should return a new array with only the even numbers, given some input of arguments', () => {
        expect(filterOutOddsArrow(1, 2, 3, 4, 5)).toEqual([2, 4]);
    });
});

describe('#findMin', () => {
    it('should return the minimum number from the set of numbers', () => {
			expect(findMin(1, -1)).toEqual(-1);
			expect(findMin(1, 4, 12, -3)).toEqual(-3);
			expect(findMin(3, 1)).toEqual(1);
		});
});

describe('#mergeObjects', () => {
		it('should merge the objects into one object', () => {
				expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
				expect(mergeObjects({a:1, b:2}, {c:3, d:4}, {e:5, f:6})).toEqual({a:1, b:2, c:3, d:4, e:5, f:6});
		})
});

describe('#doubleAndReturnArgs', () => {
		it('should double the arguments passed and return them as one array along side the original untouched array values', () => {
				expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
				expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8]);
		});
});

describe('#removeRandom', () => {
		it('should remove at random an element from an array', () => {
				expect(removeRandom([1, 2, 3]).length).toEqual(2);
				expect(removeRandom([1]).length).toEqual(0);
		});
});

describe('#extend', () => {
		it('should merge the arrays, or in the context of the function, "extend" them', () => {
				expect(extend([], [1]).length).toEqual(1);
				expect(extend([], [1])).toEqual([1]);
				expect(extend([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
				expect(extend([1, 3, 8], [6, 9], [33], [4, 5, 6])).toEqual([1, 3, 8, 6, 9, 33, 4, 5, 6]);
		});
});

describe('#addKeyVal', () => {
    it('should add a key/value pair to the object returning a new object', () => {
        expect(addKeyVal(testObj, 'title', 'pilot')).toEqual({name : 'john', title : 'pilot'});
    });
});
    
describe('#removeKey', () => {
    it('should remove a given property from an object', () => {
        expect(removeKey(testObj, 'title')).toEqual({name : 'john'});
    });
});

describe('#combine', () => {
    it('should return a new object with all properties and values from the objects passed in', () => {
        expect(combine(testObj, {address : '789 Washington Lane'})).toEqual({name : 'john', address : '789 Washington Lane'})
    });
});

describe('#update', () => {
    it('should update the value to a given key value pair', () => {
        expect(update(testObj, 'name', 'matthew')).toEqual({name : 'matthew'});
    });
});