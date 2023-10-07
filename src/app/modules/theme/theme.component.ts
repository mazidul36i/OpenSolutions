import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})

export class ThemeComponent implements AfterViewInit {

    isDark = false;
    faMoon = faMoon;
    faSun = faSun;

    body = document.querySelector("body");
    @ViewChild('themeToggleButton') themeToggle!: ElementRef;
    themeToggleButton!: HTMLElement;

    ngAfterViewInit(): void {
        this.themeToggleButton = this.themeToggle.nativeElement;
        this.themeToggleButton.addEventListener('click', () => {
            console.log("Chaging theme...");
            this.toggleClickEvent();
        });
        this.toggleTheme();
    }

    /*--------------------Toggle Theme - light and dark theme--------------------*/
    toggleTheme = (): void => {
        if (localStorage.getItem("site-theme") !== null) {
            this.isDark = localStorage.getItem("site-theme") === "dark";
            if (this.isDark) {
                this.body?.classList.add("dark");
            } else {
                this.body?.classList.remove("dark");
            }
        }
    }

    toggleClickEvent = (): void => {
        this.body?.classList.toggle("dark");
        if (this.body?.classList.contains("dark")) {
            localStorage.setItem("site-theme", "dark");
            this.isDark = true;
        } else {
            localStorage.setItem("site-theme", "light");
            this.isDark = false;
        }
    };

}
