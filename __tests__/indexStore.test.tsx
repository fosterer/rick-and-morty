import { renderHook, act } from "@testing-library/react-hooks";
import { useIndexStore } from "@/stores/indexStore";

describe("indexStore", () => {
  const { result: indexStore } = renderHook(() => useIndexStore());

  it("set queryParam value", () => {
    expect(indexStore.current.queryParamName).toEqual("");

    act(() => {
      indexStore.current.setQueryParamName("abc");
    });

    expect(indexStore.current.queryParamName).toEqual("abc");
  });
});
