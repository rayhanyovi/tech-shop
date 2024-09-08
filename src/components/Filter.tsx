"use client";
import React, { useCallback, useRef } from "react";
import { Button, Form, Input } from "antd";

const Filter = ({
  onApplyFilters,
}: {
  onApplyFilters: (filters: { brand?: string; model?: string }) => void;
}) => {
  const [form] = Form.useForm();
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const debounce = (
    func: (filters: { brand?: string; model?: string }) => void,
    delay: number
  ) => {
    return (filters: { brand?: string; model?: string }) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        func(filters);
      }, delay);
    };
  };

  const handleDebouncedApplyFilters = useCallback(
    debounce((values) => {
      onApplyFilters(values);
    }, 500),
    [onApplyFilters]
  );

  const handleChange = () => {
    form.validateFields().then((values) => {
      handleDebouncedApplyFilters(values);
    });
  };

  return (
    <div className="flex flex-col w-fit gap-8 px-8 py-4 bg-white border-gray-200 border rounded-lg">
      <p className="font-bold text-xl">Filter Product</p>
      <Form layout={"vertical"} form={form} onValuesChange={handleChange}>
        <Form.Item label="Brand" name="brand">
          <Input placeholder="Brand" allowClear />
        </Form.Item>
        <Form.Item label="Model" name="model">
          <Input placeholder="Model" allowClear />
        </Form.Item>
        <Form.Item className="flex items-end justify-end">
          <Button type="primary" htmlType="submit">
            Set Filter
          </Button>
        </Form.Item>
      </Form>
      <p>Copyright Muhammad Rayhan Yovi 2024</p>
    </div>
  );
};

export default Filter;
