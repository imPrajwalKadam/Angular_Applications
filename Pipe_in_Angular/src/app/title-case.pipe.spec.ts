import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
    const pipe = new TitleCasePipe();

    it('transforms "abc to "Abc"',() => {
      expect(pipe.transform('abc')).toBe('Abc');
    });

    it('transforms "abc def" to "Abc Def"',()=>{
      expect(pipe.transform('abc Def')).toBe('Abc Def');
    });
});
 