import { Component, DebugElement, Renderer2, RendererFactory2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComentarDirective } from './comentar.directive';

@Component({
	template: '<p inyComentar>Componente prueba</p>'
})
class TestComponent { }

describe('ComentarDirective', () => {
	// let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let pElenment: DebugElement;
	let rf: RendererFactory2;
	let renderer : Renderer2;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				TestComponent,
				ComentarDirective
			],
		})
			.compileComponents();
		rf = TestBed.inject(RendererFactory2);
		renderer = rf.createRenderer(null, null);
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		// component = fixture.componentInstance;
		pElenment = fixture.debugElement.query(By.css('p'));
	});

	it('should create an instance', () => {
		const directive = new ComentarDirective(fixture, renderer);
		expect(directive).toBeTruthy();
	});

	it('should have a title in a compenent with the directive...', () => {
		fixture.detectChanges();
		expect(pElenment.nativeElement.title).toContain('Marcado');
	});
	
	it('should have a new title in a compenent after click...', () => {
		pElenment.triggerEventHandler('click', null);
		expect(pElenment.nativeElement.title).toContain('Revisado');
	});
});
