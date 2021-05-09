import localStorageService from './localStorageService';

describe('localStorage service', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should set item', () => {
    localStorageService.setItem('dogAge', 25);
    expect(window.localStorage.getItem('dogAge')).toBe('25');
  });

  it('should get item', () => {
    localStorageService.setItem('dogAge', 36);
    localStorageService.setItem('dogName', 'Mary');
    localStorageService.setItem('dogSurname', { value: 'Jonson' });
    expect(localStorageService.getItem('dogAge')).toBe(36);
    expect(localStorageService.getItem('dogName')).toBe('Mary');
    expect(localStorageService.getItem('dogSurname')).toEqual({ value: 'Jonson' });
  });

  it('should remove item', () => {
    window.localStorage.setItem('dogAge', '36');
    localStorageService.removeItem('dogAge');
    expect(localStorageService.getItem('dogAge')).toBe(null);
  });

  it('should get items', () => {
    localStorageService.setItem('dog', 'Bob');
    localStorageService.setItem('cat', 'Mary');

    expect(localStorageService.getItems(['cat', 'dog'])).toEqual({
      cat: 'Mary',
      dog: 'Bob',
    });
  });

  it('should set items', () => {
    const items = {
      dog: 'Bob',
      cat: 'Mary',
    };
    localStorageService.setItems(items);

    expect(localStorageService.getItems(Object.keys(items))).toEqual(items);
  });

  it('should remove items', () => {
    const items = {
      dog: 'Bob',
      cat: 'Mary',
    };
    localStorageService.setItems(items);
    localStorageService.removeItems(Object.keys(items));

    expect(localStorageService.getItems(Object.keys(items))).toEqual({
      dog: null,
      cat: null,
    });
  });
});
