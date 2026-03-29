import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CorosService } from './coros.service';
import { environment } from 'src/environments/environment';

describe('CorosService', () => {
  let service: CorosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CorosService]
    });
    service = TestBed.inject(CorosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch coros from API', () => {
    const mockCoros = [
      { title: 'Coro 1', url: 'audioscoros/coro1.mp3', lyrics: 'Letra 1' },
      { title: 'Coro 2', url: 'audioscoros/coro2.mp3', lyrics: 'Letra 2' }
    ];

    service.obtenerCoros().subscribe(coros => {
      expect(coros.length).toBe(2);
      expect(coros[0].name).toBe('Coro 1');
      expect(coros[1].path).toBe('http://localhost/api/audioscoros/coro2.mp3');
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/router.php?endpoint=coros`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCoros);
  });

  it('should return empty array on error', () => {
    service.obtenerCoros().subscribe(coros => {
      expect(coros).toEqual([]);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/router.php?endpoint=coros`);
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
