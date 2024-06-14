package com.petmily.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class MemberImageService {

    private static final Logger log = LoggerFactory.getLogger(MemberImageService.class);

    @Value("${image.base.dir}")
    private String imageBaseDir;

    public String analyzeFirstImageInFolder(String mem_id) throws Exception {

        // 중괄호 제거
        mem_id = mem_id.replace("{", "").replace("}", "");

        log.info("Received member ID: {}", mem_id); // 로그로 멤버 ID 확인
        Path memberFolderPath = Paths.get(imageBaseDir, mem_id);
        log.info("Constructed path: {}", memberFolderPath); // 로그로 경로 확인

        if (!Files.exists(memberFolderPath)) {
            log.error("Directory not found: {}", memberFolderPath);
            throw new Exception("Directory not found: " + memberFolderPath);
        }

        Optional<Path> firstImagePath = Files.list(memberFolderPath)
                .filter(Files::isRegularFile)
                .findFirst();

        if (!firstImagePath.isPresent()) {
            log.error("No images found in directory for member ID: {}", mem_id);
            throw new Exception("No images found in directory for member ID: " + mem_id);
        }

        String imagePath = firstImagePath.get().toString();
        log.info("Analyzing image at path: {}", imagePath);

        ProcessBuilder pb = new ProcessBuilder("python", "scripts/mem_image.py", imagePath);
        Process process = pb.start();

        StringBuilder output = new StringBuilder();
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            output.append(line).append("\n");
        }

        int exitCode = process.waitFor();
        if (exitCode != 0) {
            log.error("Image analysis script failed with exit code: {}", exitCode);
            throw new Exception("Image analysis script failed with exit code: " + exitCode);
        }

        return output.toString();
    }

    public String userImageUrl(String mem_id) throws Exception {

        // 중괄호 제거
        mem_id = mem_id.replace("{", "").replace("}", "");

        log.info("Received member ID: {}", mem_id); // 로그로 멤버 ID 확인
        Path memberFolderPath = Paths.get(imageBaseDir, mem_id);
        log.info("Constructed path: {}", memberFolderPath); // 로그로 경로 확인

        if (!Files.exists(memberFolderPath)) {
            log.error("Directory not found: {}", memberFolderPath);
            throw new Exception("Directory not found: " + memberFolderPath);
        }

        Optional<Path> firstImagePath = Files.list(memberFolderPath)
                .filter(Files::isRegularFile)
                .findFirst();

        if (!firstImagePath.isPresent()) {
            log.error("No images found in directory for member ID: {}", mem_id);
            throw new Exception("No images found in directory for member ID: " + mem_id);
        }

        String imagePath = firstImagePath.get().toString();
        log.info("Analyzing image at path: {}", imagePath);

        return imagePath;
    }
}
