import { assertEquals } from "@std/assert";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useTheme } from "./useTheme.ts";

Deno.test.afterEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
});

Deno.test("Theme liest den gespeicherten Wert und toggelt", () => {
    localStorage.setItem("klangraum-theme", "light");

    const { result } = renderHook(() => useTheme());
    assertEquals(result.current.theme, "light");

    act(() => result.current.toggleTheme());

    assertEquals(result.current.theme, "dark");
    assertEquals(document.documentElement.dataset.theme, "dark");
    assertEquals(localStorage.getItem("klangraum-theme"), "dark");
});
